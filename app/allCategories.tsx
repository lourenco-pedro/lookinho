import BreakLine from '@/components/BreakLine';
import CompositeCardTitledDisc from '@/components/cards/CompositeCardTitledDisc';
import ComposedVerticalScrollCollection from '@/components/ComposedVerticalScrollCollection';
import { d_categories } from '@/const/debug_backend';
import { colors, fontFamily, labels, layout } from '@/const/style';
import { StatusBar, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";

export default function allCategories()
{

    return (
        <SafeAreaView style={ [ layout.page ] }>
            <StatusBar hidden={true}/>
            
            <BreakLine h={25}/>

            <Text style={ [ layout.screenBounds, fontFamily.default, labels.large, { borderBottomWidth: 1, borderBottomColor: colors.hot, paddingBottom: 5, color: colors.hot } ] }>Categories</Text>
            <View style={ innerStyle.viewport }>
                <ComposedVerticalScrollCollection style={{ alignSelf: 'center' }} data={d_categories} renderItem={({item}) => <CompositeCardTitledDisc id={item.id} title={item.title} source={item.image}/> }/>
            </View>
        </SafeAreaView>
    );
}
const innerStyle = StyleSheet.create({
    
    viewport:
    {
        width: '100%',
        justifyContent: 'center'
    }
});