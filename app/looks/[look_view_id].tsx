import ComposedButton from "@/components/ComposedButton";
import ComposedFavorite from "@/components/ComposedFavorite";
import ComposedLikes from "@/components/ComposedLikes";
import DebugWindow from "@/components/debug/DebugWindow";
import { DebugData, Look } from "@/const/debug_backend";
import { screenHeight } from "@/const/info";
import { fontFamily, labels, layout } from "@/const/style";
import { useLocalSearchParams } from "expo-router"
import { useEffect, useRef, useState } from "react";
import { View, Text, Image, StyleSheet, GestureResponderEvent, Animated, PanResponder, PanResponderGestureState, ScrollView } from "react-native";

type TouchEventData = 
{
    lastTouchPositionY : number
    deltaY : number,
    velocityY : number 
}

export default function lookview()
{
    const { look_view_id } = useLocalSearchParams();
    const [data, updateData] = useState<Look>();
    const [canScroll, setCanScroll] = useState(false);
    
    const [scrollOffset, updateScrollOffset] = useState(0);
    const lastScrollOffset = useRef(0);

    const splitDistribution = useRef<{ x: number, y: number }>({ x: 0.6, y: 0.4 });
    const splitedDistributionX = useRef(new Animated.ValueXY({ x: 0.6 * screenHeight, y: 0.4 * screenHeight } )).current;

    useEffect(()=>
    {
        if(typeof(look_view_id) != "string")
            return;

        var foundData = DebugData.looks.get(look_view_id);
        updateData(foundData);
    }, []);

    useEffect(()=>
    {
        console.log(canScroll);
    }, [canScroll]);

    useEffect(()=>
    {
        onTouchMove(0);
    }, [scrollOffset]);

    function onTouchMove(vy : number) : void
    {
        let newX = splitDistribution.current.x + vy * .03;
        let newY = splitDistribution.current.y - vy * .03;

        if(!canScroll && splitDistribution.current.y >= .6 && vy < 0)
        {
            setCanScroll(true);
            return;
        }
        else if(canScroll && scrollOffset <= 0)
        {
            setCanScroll(false);
            return;
        }
        

        if(canScroll)
            return;

        splitDistribution.current.x = newX;
        splitDistribution.current.y = newY;
        
        splitDistribution.current.x = Math.max(.4, splitDistribution.current.x);
        splitDistribution.current.x = Math.min(.6, splitDistribution.current.x);

        splitDistribution.current.y = Math.max(.4, splitDistribution.current.y);
        splitDistribution.current.y = Math.min(.6, splitDistribution.current.y);
        
        Animated.timing(splitedDistributionX, 
        {
            toValue: { x: splitDistribution.current.x * screenHeight, y: splitDistribution.current.y * screenHeight },
            duration: 0,
            useNativeDriver: false    
        }).start();
    }
    
    const gesutureResponderEvent = useRef(PanResponder.create(
        {
            onMoveShouldSetPanResponder: () => !canScroll,
            onPanResponderMove(e, gestureState) {
                onTouchMove(gestureState.vy);
            },
        }
    ));

    return ( 
        <View 
        style={ [ layout.page ] }>

            <DebugWindow>
                <Text style={{ position: 'absolute', color: 'red' }}>{ look_view_id }</Text>
                <Text style={ { color: 'white' } }>can scroll: {canScroll}</Text>
            </DebugWindow>

            <Animated.View 
            style={ [innerStyle.imageContainer, { height: splitedDistributionX.x }]}>
                <Image style={ innerStyle.image } source={data?.image} width={100} height={100} resizeMode="cover"/>
                <ComposedLikes likes={data?.likes}/>
                <ComposedFavorite marked={false}/>
            </Animated.View>
            <Animated.View {...gesutureResponderEvent.current.panHandlers } style={ [ innerStyle.info, { height: splitedDistributionX.y } ] }>
                <ScrollView scrollEnabled={canScroll} horizontal={false} onScroll={e => updateScrollOffset(e.nativeEvent.contentOffset.y)}>
                <ComposedButton>teste</ComposedButton>
                <Text style={ [ labels.big, fontFamily.default] }>{ data?.title } </Text>
                <Text style={ [ labels.normal, fontFamily.defaultThin] }> by { data?.author }</Text>
                <Text style={ [ labels.normal, fontFamily.default, { marginTop: 25 }] }>{ data?.description }</Text>
                <Text style={ [ labels.normal, fontFamily.default, { marginTop: 25 }] }>{ data?.description }</Text>
                <Text style={ [ labels.normal, fontFamily.default, { marginTop: 25 }] }>{ data?.description }</Text>
                <Text style={ [ labels.normal, fontFamily.default, { marginTop: 25 }] }>{ data?.description }</Text>
                </ScrollView>
            </Animated.View>
        </View>
    );
}

const innerStyle = StyleSheet.create({
    
    imageContainer:
    {
    },
    image: 
    {
        width: '100%',
        height: '100%'
    },
    info:
    {
        width: '100%',
        padding: 10
    }
});