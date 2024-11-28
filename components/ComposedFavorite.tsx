import { colors } from "@/const/style";
import AntDesign from "@expo/vector-icons/AntDesign";
import { StyleSheet, TouchableOpacity, View } from "react-native";

interface ComposedFavoriteProp
{
    marked : boolean,
}

export default function ComposedFavorite({ marked } : ComposedFavoriteProp)
{
    return (
        <TouchableOpacity>
            { null == marked || !marked ? 
                <AntDesign style={ innerStyle.icon } size={20} name='staro' color={ colors.primary }/> : 
                <AntDesign style={ innerStyle.icon } size={20} name='star' color={ colors.primary }/> }
        </TouchableOpacity>
    );
}

const innerStyle = StyleSheet.create({

    icon:
    {
        position: 'absolute',
        right: 0,
        bottom: 0,
        marginRight: 8,
        marginBottom: 10
    }
});