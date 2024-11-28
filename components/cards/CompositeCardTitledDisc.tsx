import { width } from "@/const/info";
import { colors, fontFamily, labels } from "@/const/style";
import { AppliedFilters } from "@/GLOBALCONTEXT";
import { Href, router } from "expo-router";
import { useContext } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

interface CompositeCardTitledDiscProps
{
    id: string,
    title : string,
    source : any,
}

export default function CompositeCardTitledDisc({ id, title, source } : CompositeCardTitledDiscProps)
{

    const filtersContext  = useContext(AppliedFilters);

    function goToExplore(page : Href, filtersToApply : string[])
    {
        filtersContext.setFilters(filtersToApply);
        router.push(page);
    }

    return (
        <TouchableOpacity style={ innerStyle.container } onPress={()=>{ goToExplore('/(tabs)/explore', [id]) }}>
            <Image style={ innerStyle.image } source={source}/> 
            <View style={ innerStyle.panel }></View>
            <Text numberOfLines={1} adjustsFontSizeToFit={true} style={ [ innerStyle.title, labels.big, fontFamily.prozaLibre ] }>{ title }</Text>
        </TouchableOpacity>
    );
}

const innerStyle = StyleSheet.create({
    
    container:
    {
        width: width(.2),
        height: width(.2),
        margin: 6,
    },
    image:
    {
        borderRadius: 100,
        overflow: 'hidden',
        position: 'absolute',
        resizeMode: 'cover',
        width: '100%',
        height: '100%',
    },
    title:
    {
        width: '100%',
        height: '100%',
        textAlign: 'center',
        textAlignVertical: 'center',
        color: colors.pinkDark,
        padding: 5
    },
    panel:
    {
        opacity: .76,
        borderRadius: 100,
        backgroundColor: colors.primary,
        position: 'absolute',
        width: '100%',
        height: '100%',
    }
});