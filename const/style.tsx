import { StyleSheet } from "react-native";
import { width } from "./info";

export const colors = 
{
    primary: '#FEEAFA',
    light: '#EDEDED',
    unselected: '#808080',
    hot: '#FBB9EE',
    pinkDark: '#CD6AB9' 
}

export const fontNames = 
{
    robotoCondensed: 'RobotoCondensed',
    robotoCondensedThin: 'RobotoCondensedThin',
    robotoCondensedBold: 'RobotoCondensedBold',

    prozaLibre: 'ProzaLibre',
    prozaLibreBold: 'ProzaLibreBold',
    prozaLibreItalic: 'ProzaLibreItalic'
}

export const labels = StyleSheet.create({
    
    hcenter:
    {
        textAlign: 'center'
    },
    vcenter:
    {
        alignSelf: 'center'
    },
    
    normal:{
        fontSize: width(.04),
    },
    big:{
        fontSize: width(.06),
    },
    small:{
        fontSize: width(.035),
    },
    smaller:
    {
        fontSize: width(.03),
    },
    large:{
        fontSize: width(.065),
    },
    labeledHeader:
    {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 24,
        paddingRight: 26,
    }
});

export const fontFamily = StyleSheet.create({

    default: 
    {
        fontFamily: fontNames.robotoCondensed
    },
    defaultThin:
    {
        fontFamily: fontNames.robotoCondensedThin
    },
    defaultBold:
    {
        fontFamily: fontNames.robotoCondensedBold
    },

    prozaLibre:
    {
        fontFamily: fontNames.prozaLibre
    },
    prozaLibreItalic:
    {
        fontFamily: fontNames.prozaLibreItalic
    },
    prozaLibreBold:
    {
        fontFamily: fontNames.prozaLibreBold
    }
});

export const buttons = StyleSheet.create({

    normal: {
        borderRadius: 25,
        backgroundColor: colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 50,
    }
});


export const layout = StyleSheet.create({
    
    page:
    {
        backgroundColor: 'white',
        flex: 1
    },
    screenBounds: 
    {
        paddingTop: 50,
        paddingLeft: 24,
        paddingRight: 24
    },
    alingChildrenCenter:
    {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
});