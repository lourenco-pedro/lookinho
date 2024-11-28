import { Dimensions, PixelRatio } from "react-native";

export const screenWidth = Dimensions.get('screen').width
export const screenHeight = Dimensions.get('screen').height
export const scale = Dimensions.get('screen').scale

export function aspect() { return screenWidth / screenHeight }
export function pr() { return PixelRatio.get() }
export function fontSize() { return PixelRatio.getFontScale() }

export function ph(px : number)
{
    return (px / screenHeight) * 100 
}

export function pw(px : number)
{
    return (px / screenWidth) * 100
}

export function width(percentage : number)
{
    return percentage * screenWidth;
}

export function height(percentage : number)
{
    return percentage * screenHeight;
}