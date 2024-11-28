import { GestureResponderEvent, StyleProp, Text, TextStyle, TouchableOpacity, View } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import { colors, fontFamily, labels } from "@/const/style";

interface CompositeLabeledHeaderProps
{
    children: string,
    onPress?: (event: GestureResponderEvent) => void,
    textStyle?: StyleProp<TextStyle>
}

export default function CompositeLabeledHeader({ children, textStyle, onPress } : CompositeLabeledHeaderProps)
{
    return (
        <View style={ labels.labeledHeader }>
            <Text style={ [labels.big, fontFamily.defaultThin, textStyle] }>{ children }</Text>
            <TouchableOpacity onPress={onPress}>
                <AntDesign name="arrowright" size={24} color={colors.unselected}/>
            </TouchableOpacity>
        </View>
    );
}