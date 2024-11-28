import { ReactNode } from "react";
import { StyleSheet, View } from "react-native";

interface DebugWindowProps
{
    children? : ReactNode[]
} 

export default function DebugWindow({ children } : DebugWindowProps)
{
    return (
        <View style={ innerStyle.debugWindow }>
            { children }
        </View>
    );
}

const innerStyle = StyleSheet.create({
    debugWindow:
    {
        backgroundColor: 'rgba(.2, .2, .2, 1)',
        zIndex: 999
    }
});