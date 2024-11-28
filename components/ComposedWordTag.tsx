import { colors, fontFamily, fontNames } from "@/const/style";
import { Text, TouchableOpacity, GestureResponderEvent, StyleProp, ViewStyle } from "react-native";

interface ComposedWordTagProp
{
    children? : string,
    onClose? : ((event: GestureResponderEvent) => void) | undefined
    style?:  StyleProp<ViewStyle>
}

export default function ComposedWordTag({ style, children, onClose } : ComposedWordTagProp)
{
    return (
        <TouchableOpacity style={[{
            backgroundColor: colors.primary,
            borderColor: colors.hot,
            borderWidth: 1,
            height: 28,
            width: 'auto',
            margin: 2,
            flexDirection: "row",
            paddingLeft: 5,
            paddingRight: 5,
            paddingTop: 2,
            zIndex: 99
        }, style]} onPress={onClose}>
            <Text style={[fontFamily.default, { marginRight: 5, color: colors.hot }]}>
                { children }
            </Text>
            <Text style={{ color: colors.hot }}>
                x
            </Text>
        </TouchableOpacity>
    );
}