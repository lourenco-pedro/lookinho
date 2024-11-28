import { Image, ImageStyle, ImageURISource, StyleProp, ViewStyle } from "react-native";

interface CompositeVectorBackgroundProps
{
    imageSource : ImageURISource,
    fade?: number,
    style?: StyleProp<ImageStyle>
}

export default function CompositeVectorBackground({ imageSource, fade, style } : CompositeVectorBackgroundProps)
{
    return (
        <Image style={[{ opacity: fade }, style]} source={imageSource}/>
    );
}