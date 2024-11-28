import { colors, fontFamily, labels } from "@/const/style";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Text, View, Image, ImageURISource, StyleSheet, StyleProp, ViewStyle, ImageStyle, TouchableOpacity } from "react-native";
import ComposedLikes from "../ComposedLikes";
import ComposedFavorite from "../ComposedFavorite";
import { width } from "@/const/info";

interface CompositeCardCompactProp
{
    
    title?: string,
    displayTitle? : boolean,
    
    author?: string,
    displayAuthor?: boolean

    likes?: number,
    favourite?: boolean,
    bookmark?: boolean,
    
    borderTopLeftRadius? : boolean,
    borderTopRightRadius? : boolean,

    margin? : number,

    source: ImageURISource | undefined,
}

export default function CompositeCardCompact({ title, 
    author, 
    likes, 
    favourite,
    bookmark, 
    borderTopLeftRadius, 
    borderTopRightRadius,
    displayAuthor = true,
    displayTitle = true,
    margin = 5,
    source } : CompositeCardCompactProp)
{

    function getBorder() : StyleProp<ImageStyle>[]
    {

        var toReturn = []

        if(null != borderTopLeftRadius && borderTopLeftRadius)
            toReturn.push(innerStyle.left_border);

        if(null != borderTopRightRadius && borderTopRightRadius)
            toReturn.push(innerStyle.right_border);

        return toReturn;
    }

    return (
        <TouchableOpacity style={ [innerStyle.container, { margin: margin }] }>
            <View style={ [ innerStyle.principal ] }>
                <Image style={ [ innerStyle.picture, getBorder() ] } source={source}></Image>
                
                <ComposedLikes marked={favourite} likes={likes} />
                <ComposedFavorite marked={false}/>
            </View>

            { (displayAuthor || displayTitle) && <View style={ [ innerStyle.names ] }>
                { displayTitle && <Text numberOfLines={1} style={ [ innerStyle.names , fontFamily.defaultThin, labels.normal] }>{ title }</Text> }
                { displayAuthor && <Text numberOfLines={1} style={ [ innerStyle.names , fontFamily.defaultThin, labels.smaller ] }>{ author }</Text> }
            </View> }
        </TouchableOpacity>
    );
}

const innerStyle = StyleSheet.create({
    container:
    {
        width: width(.3),
    },
    left_border:
    {
        borderTopLeftRadius: 40
    },
    right_border:
    {
        borderTopRightRadius: 40
    },
    likes:
    {
        width: 40,
        position: 'absolute',
        right: 0,
        top: 0,
        marginRight: 8,
        marginTop: 10,
        alignItems: 'center',
    },
    likesN:
    {
        justifyContent: 'center',
        alignSelf: 'center',
        color: colors.primary
    },
    principal:
    {
        width: '100%',
        height: width(.3),
    },
    names:
    {
        paddingLeft: 2,
    },
    picture:
    {
        resizeMode: 'contain',
        width: '100%',
        height: '100%',
    },
    save:
    {
        position: 'absolute',
        right: 0,
        bottom: 0,
        marginRight: 8,
        marginBottom: 10
    }
});
