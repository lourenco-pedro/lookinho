import { colors, fontFamily } from "@/const/style";
import AntDesign from "@expo/vector-icons/AntDesign";
import { View, Text, StyleSheet, StyleProp, ViewStyle, TouchableOpacity } from "react-native";

interface ComposedLikes
{
    marked? : boolean,
    likes? : number,
    style?: StyleProp<ViewStyle>,
    size? : number
}

export default function ComposedLikes({ marked, likes, size = 20, style } : ComposedLikes)
{

    function evaluateLikes()
    {
        if(likes == undefined)
            return 0;

        if (likes < 1000) return likes.toString();

        const units = ["k", "M", "B", "T"];
        let unitIndex = -1;
    
        while (Math.abs(likes) >= 1000 && unitIndex < units.length - 1) {
            likes /= 1000;
            unitIndex++;
        }

        return likes % 1 === 0 ? `${likes}${units[unitIndex]}` : `${likes.toFixed(1)}${units[unitIndex]}`;
    }

    return (
        <TouchableOpacity style={ [ innerStyle.likes, { flexDirection: 'column' }, style ] }>
            <AntDesign style={ { marginHorizontal: 'auto', width: size } } name={ false == marked ? 'hearto' : 'heart' } color={colors.primary} size={size}/>
            <Text style={ [ innerStyle.likesN, fontFamily.defaultBold ] }>{ null != likes ? evaluateLikes() : 0 }</Text>
        </TouchableOpacity>
    );
}

const innerStyle = StyleSheet.create({
    likes:
    {
        width: 40,
        position: 'absolute',
        right: 0,
        top: 0,
        marginTop: 10,
        alignItems: 'center',
    },
    likesN:
    {
        justifyContent: 'center',
        alignSelf: 'center',
        color: colors.primary
    },
});