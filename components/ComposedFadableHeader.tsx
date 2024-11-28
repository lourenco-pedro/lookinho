import { colors } from "@/const/style";
import { forwardRef, ReactNode, useEffect, useImperativeHandle, useRef } from "react";
import { Animated, StyleSheet } from "react-native";
import { View, Text } from "react-native";

export type ComposedFadebleHeaderOptions =
{
    right? : (()=> ReactNode)
    left? : (()=> ReactNode)
    body? : (()=> ReactNode)
    showTitle? : boolean
    title?: string,
    height?: number,
    backgroundColor?: string,
}

export interface FadableHeaderHandler
{
    fadeIn : (duration : number) => void
    fadeOut : (duration : number) => void
}

interface ComposedFadebleHeaderProps
{
    shown?: boolean
    options? : ComposedFadebleHeaderOptions | undefined
}

const ComposedFadebleHeader = forwardRef<FadableHeaderHandler, ComposedFadebleHeaderProps>(( { options, shown } : ComposedFadebleHeaderProps, ref) =>
{
    const DURATION = 200;
    const fadeAnimation = useRef(new Animated.Value(0)).current;

    function fadeIn(duration : number = 1000)
    {
        Animated.timing(fadeAnimation, {
            toValue: 0,
            duration: duration,
            useNativeDriver: false
        }).start();
    }

    function fadeOut(duration : number = 1000)
    {
        Animated.timing(fadeAnimation, {
            toValue: undefined != options && undefined != options.height ? -options.height : -100,
            duration: duration,
            useNativeDriver: false
        }).start();
    }

    useEffect(()=> shown ? fadeIn(DURATION) : fadeOut(DURATION),[]);

    useImperativeHandle(ref, ()=>
    ({
        fadeIn,
        fadeOut    
    }));

    return (
        <Animated.View style={ [ 
            innerStyle.container,
            { 
                zIndex: 99,
                position: 'absolute',
                width: '100%',
                height: undefined != options && undefined != options.height ? options.height : 100, 
                top: fadeAnimation,
                backgroundColor: undefined != options && undefined != options.backgroundColor ? options.backgroundColor : 'white'
            } ] }>

            <View>
                { undefined != options && undefined == options.body && undefined != options.showTitle && undefined != options.title && <Text style={ innerStyle.headerTitle }>{ options.title }</Text>}
                { undefined != options && undefined == options.body && undefined != options.showTitle && undefined == options.title && <Text style={ innerStyle.headerTitle }>Header</Text>}
                { undefined != options && undefined != options.body ? options.body() : <></> }
            </View>
            
            { undefined != options && undefined != options.right ? options.right() : <></> }
            { undefined != options && undefined != options.left ? options.left() : <></> }
        </Animated.View>
    );
});

const innerStyle = StyleSheet.create({
    container: 
    {
        borderBottomWidth: .5,
        borderBottomColor: colors.unselected
    },
    headerTitle: 
    {
        marginTop: '12%',
        marginLeft: '10%',
        fontSize: 20
    }
});

export default ComposedFadebleHeader;