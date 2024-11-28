import BreakLine from "@/components/BreakLine";
import CompositeCardBig from "@/components/cards/CompositeCardBig";
import CompositeCardTitledDisc from "@/components/cards/CompositeCardTitledDisc";
import ComposedButton from "@/components/ComposedButton";
import ComposedFadebleHeader, { FadableHeaderHandler } from "@/components/ComposedFadableHeader";
import ComposedHorizontalScrollCollection from "@/components/ComposedHorizontalScrollCollection";
import CompositeLabeledHeader from "@/components/CompositeLabeledHeader";
import GoingOutToday from "@/components/GoinOutToday";
import { d_categories, d_looks } from "@/const/debug_backend";
import { fontFamily, labels, layout } from "@/const/style";
import { router } from "expo-router";
import React, { ReactNode, useEffect, useRef, useState } from "react";
import { NativeScrollEvent, NativeSyntheticEvent, ScrollView, StatusBar, View, Text } from "react-native";


function drawNeedHelpElement() : ReactNode
{
    return (
    <View style={[{
        height: '100%',
        width: '100%',
        flexDirection: 'row',
        paddingLeft: '5%',
        paddingRight: '5%',
        paddingTop: 20
        }]}>
        <Text style={ [labels.big, fontFamily.defaultThin, labels.vcenter, { marginRight: 10 }] }>Going out today?</Text>
        <ComposedButton style={[labels.vcenter , { height: 50, width: 100 }]}>Help me!</ComposedButton>
    </View>
    );
}

export default function home()
{

    const [isOffScreen, setOffScreenState] = useState(true);

    const goingOutToday = useRef<View>(null);
    const header = useRef<FadableHeaderHandler>(null);

    function onScroll(event : NativeSyntheticEvent<NativeScrollEvent>)
    {
        if(null === goingOutToday.current)
        {
            return;
        }
            
        goingOutToday.current?.measure((x, y, w, h) => 
        {
            var currentIsOffScreen = Math.abs(y - event.nativeEvent.contentOffset.y) > h;
            if(currentIsOffScreen != isOffScreen)
                setOffScreenState(currentIsOffScreen);
        });
    }

    useEffect(()=>
    {
        if(undefined === header)
            return;

        if(isOffScreen)
            header.current?.fadeIn(200);
        else header.current?.fadeOut(200);


    }, [isOffScreen])

    return (
        <View style={ [ layout.page ] }>

            <ComposedFadebleHeader ref={header} shown={true} options={{
                title: 'home',
                showTitle: true,
                height: 100,
                body: drawNeedHelpElement
            }}/>
            
            <StatusBar hidden={true}/>
            <ScrollView onScroll={onScroll} style={{ padding: 0 }} showsVerticalScrollIndicator={false}>
            <BreakLine h={25}/>
            <View>

                <BreakLine h={32}/>

                <View ref={goingOutToday}>
                    <GoingOutToday/>
                </View>
                
                <BreakLine h={18}/>

                <CompositeLabeledHeader onPress={()=> router.navigate('/allCategories')}>Explore what they're using</CompositeLabeledHeader>
                <BreakLine h={8}/>
                <ComposedHorizontalScrollCollection data={d_categories.slice(0, 5)} renderItem=
                { 
                    ({item, index})=> <CompositeCardTitledDisc id={item.id} title={item.title} source={item.image}/> 
                }/>

                <BreakLine h={8}/>
                <CompositeLabeledHeader>Holidays are here!</CompositeLabeledHeader>
                <BreakLine h={8}/>
                <ComposedHorizontalScrollCollection data={d_looks.slice(0, 5)} renderItem=
                { 
                    ({item, index})=> <CompositeCardBig id={item.id} bookmark={false} favourite={false} source={item.image} likes={item.likes}/> 
                }/>

                <BreakLine h={8}/>
                <CompositeLabeledHeader>People are also using</CompositeLabeledHeader>
                <BreakLine h={8}/>
                <ComposedHorizontalScrollCollection data={d_looks.slice(0, 5)} renderItem=
                { 
                    ({item, index})=> <CompositeCardBig id={item.id} bookmark={false} favourite={false}  source={item.image} likes={item.likes}/> 
                }/>

<BreakLine h={8}/>
                <CompositeLabeledHeader>People are also using</CompositeLabeledHeader>
                <BreakLine h={8}/>
                <ComposedHorizontalScrollCollection data={d_looks.slice(0, 5)} renderItem=
                { 
                    ({item, index})=> <CompositeCardBig id={item.id} bookmark={false} favourite={false}  source={item.image} likes={item.likes}/> 
                }/>

<BreakLine h={8}/>
                <CompositeLabeledHeader>People are also using</CompositeLabeledHeader>
                <BreakLine h={8}/>
                <ComposedHorizontalScrollCollection data={d_looks.slice(0, 5)} renderItem=
                { 
                    ({item, index})=> <CompositeCardBig id={item.id} bookmark={false} favourite={false}  source={item.image} likes={item.likes}/> 
                }/>

<BreakLine h={8}/>
                <CompositeLabeledHeader>People are also using</CompositeLabeledHeader>
                <BreakLine h={8}/>
                <ComposedHorizontalScrollCollection data={d_looks.slice(0, 5)} renderItem=
                { 
                    ({item, index})=> <CompositeCardBig id={item.id} bookmark={false} favourite={false}  source={item.image} likes={item.likes}/> 
                }/>
            </View>
            </ScrollView>
        </View>
    );
}