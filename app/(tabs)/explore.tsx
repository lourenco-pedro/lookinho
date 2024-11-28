import BreakLine from "@/components/BreakLine";
import CompositeCardCompact from "@/components/cards/CompositeCardCompact";
import ComposedVerticalScrollCollection from "@/components/ComposedVerticalScrollCollection";
import ComposedWordKeyInputField from "@/components/ComposedWordKeyInputField";
import { DebugData } from "@/const/debug_backend";
import { colors, layout } from "@/const/style";
import { AppliedFilters } from "@/GLOBALCONTEXT";
import { explorer, SearchElement } from "@/utils/explorer";
import { useFocusEffect } from "expo-router";
import { useCallback, useContext, useState } from "react";
import { View, StyleSheet } from "react-native";

export default function explore()
{

    const [searchElements, setFoundElements] = useState<SearchElement[]>(); 
    const filtersContext = useContext(AppliedFilters);

    useFocusEffect(
        useCallback(()=>
        {
            let foundElements = explorer.search(filtersContext.appliedFilters);
            if(foundElements.length > 0)
            {
                setFoundElements(foundElements);
            }
        }, [filtersContext.appliedFilters]));

    function refreshSuggestions(currentSearchTag : string) : string[]
    {
        var result : string[] = Array.from(DebugData.categoriesByNames
                                    .keys())
                                    .filter(key => key.toLowerCase().includes(currentSearchTag.toLowerCase()));

        return result;
    }

    return (
        <View style={ [ layout.page, { padding: 10 } ] }>
            <BreakLine h={50}/>
            <ComposedWordKeyInputField style={ { 
                position: 'absolute', 
                top: 60, 
                zIndex: 99, 
                alignSelf: "center",
                width: '95%' } } onSuggestionRefresh={refreshSuggestions} iconColor={colors.hot} icon="search1"/>
            <BreakLine h={10}/>
            <View style={ innerStyle.expolore }>
                <ComposedVerticalScrollCollection style={{ marginHorizontal: searchElements != undefined && searchElements?.length > 2 ? 'auto' : 0}} data={searchElements} headerHeight={50} renderItem=
                {
                    ({item, index} : { item : SearchElement, index : number }) => {
                        return <CompositeCardCompact margin={1} displayAuthor={false} displayTitle={false} bookmark={false} author={item.name} title={item.name} favourite={false} likes={1000} source={item.img.length > 0 ? item.img[0] : undefined}/>
                    }
                }/>
            </View>
         </View>
    );
}

const innerStyle = StyleSheet.create({
    expolore:
    {
        height: '100%'
    }
});