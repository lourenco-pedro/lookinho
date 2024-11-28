import { fontFamily, labels, layout } from "@/const/style";
import { View, Text } from "react-native";
import ComposedButton from "./ComposedButton";
import { forwardRef } from "react";

const GoingOutToday = forwardRef((props, ref) =>
{
    return (
    <View style={ [ layout.alingChildrenCenter, { width: '100%' }] }>
        <View style={ [ { height: 85 } ] }>
            <Text style={ [ labels.hcenter, labels.big, fontFamily.default ] }>Going out today?</Text>
            <ComposedButton labelStyle={ labels.normal }>Help me!</ComposedButton>
        </View>
    </View>
    );
});

export default GoingOutToday;
