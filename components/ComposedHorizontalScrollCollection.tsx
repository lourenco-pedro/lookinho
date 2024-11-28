import { ReactNode } from "react";
import { ListRenderItem, FlatList, View } from "react-native";

interface ComposedHorizontalScrollCollectionProps
{
    data: any[],
    renderItem: ListRenderItem<ReactNode>
}

export default function ComposedHorizontalScrollCollection({ data, renderItem }: ComposedHorizontalScrollCollectionProps )
{
    return(
            <FlatList ListHeaderComponent={<View style={{ width: 8 }}/>} showsHorizontalScrollIndicator={false} horizontal={true} renderItem={renderItem} data={data}/>
    );
}