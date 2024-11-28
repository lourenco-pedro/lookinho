import { View } from "react-native";

interface BreakLineProp
{
    h?: number
}

export default function BreakLine({ h } : BreakLineProp)
{
    return(
        <View style={ { height: null == h ? 5 : h  } }/>
    );
}