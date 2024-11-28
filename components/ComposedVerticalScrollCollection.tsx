import { ListRenderItem, FlatList, Text, View, StyleProp, ViewStyle } from "react-native";

interface ComposedVerticalScrollCollectionProps
{
    data: any[] | undefined,
    renderItem: ListRenderItem<any>,
    style?: StyleProp<ViewStyle>,
    headerHeight? : number
}

export default function ComposedVerticalScrollCollection({ data, renderItem, style, headerHeight = 20 }: ComposedVerticalScrollCollectionProps )
{
    return(
            <FlatList style={ [style] } numColumns={3} ListFooterComponent={<View style={{ height: 100 }}></View>} ListHeaderComponent={<View style={{ height: headerHeight }}></View>} showsVerticalScrollIndicator={false} renderItem={renderItem} data={data}/>
    );
}