import { buttons } from "@/const/style";
import { GestureResponderEvent, StyleProp, Text, TextStyle, TouchableOpacity, ViewStyle } from "react-native";

interface TouchableOpacityProps
{
    children: string,
    style?: StyleProp<ViewStyle>,
    labelStyle?: StyleProp<TextStyle>,
    onPress?: ((event: GestureResponderEvent) => void)
}

export default function ComposedButton({ onPress, children, style, labelStyle } : TouchableOpacityProps)
{
    return (
    <TouchableOpacity  onPress={onPress} style={[buttons.normal, style ]}>
        <Text style={ [ { alignContent: "center", textAlign: 'center' }, labelStyle ] }>{ children }</Text>
    </TouchableOpacity>  
    );
}