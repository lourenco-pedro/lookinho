import { StyleSheet, Image, TouchableOpacity, ImageURISource } from "react-native";
import ComposedLikes from "../ComposedLikes";
import ComposedFavorite from "../ComposedFavorite";
import { width } from "@/const/info";
import { router } from "expo-router";

interface CompositeCardBigProp
{
    id: string,
    likes: number,
    favourite: boolean,
    bookmark: boolean,
    
    source: any,
}

export default function CompositeCardBig({ id, likes, favourite, bookmark, source } : CompositeCardBigProp)
{
    return (
        <TouchableOpacity onPress={()=>{router.push({
            pathname: '/looks/[look_view_id]',
            params: { look_view_id: id }
        })}} style={ innerStyle.container }>
            <Image style={ innerStyle.image } source={ source }></Image>
            <ComposedLikes likes={likes} marked={favourite}/>
            <ComposedFavorite marked={bookmark}/>
        </TouchableOpacity>
    );
}

const innerStyle = StyleSheet.create({
    container:
    {
        margin: 6,
        height: 210,
        width: width(.35),
        borderRadius: 10,
        overflow: 'hidden'
    },
    image:
    {
        resizeMode: 'cover',
        width: '100%',
        height: '100%',
    }
});