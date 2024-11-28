import { AppliedFilters, AppliedFiltersContex, AppliedFiltersContexEvents } from "@/GLOBALCONTEXT";
import EventEmmiter from "@/utils/EventSystem/EventEmmiter";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect, useState } from "react";

export default function Layout()
{
    
    SplashScreen.preventAutoHideAsync();

    const [filters, setFilters] = useState<string[]>([]);
   
    const [fontsLoaded] = useFonts({
        'RobotoCondensed': require('../assets/fonts/RobotoCondensed-Regular.ttf'),
        'RobotoCondensedThin': require('../assets/fonts/RobotoCondensed-Light.ttf'),
        'RobotoCondensedBold': require('../assets/fonts/RobotoCondensed-Bold.ttf'),
        'ProzaLibre' : require('../assets/fonts/ProzaLibre-Regular.ttf'),
        'ProzaLibreItalic' : require('../assets/fonts/ProzaLibre-Italic.ttf'),
        'ProzaLibreBold' : require('../assets/fonts/ProzaLibre-Bold.ttf'),
    });


    const appliedFiltersContext : AppliedFiltersContex = 
    {
        appliedFilters: filters,
        setFilters: setFilters,
    }
    
    //firing events when filter is changed
    useEffect(()=>
    {
    }, [filters]);

    if(!fontsLoaded)
        {
            return undefined;
        }
        else
        {
            SplashScreen.hideAsync();
    }

    return (
        <AppliedFilters.Provider value={appliedFiltersContext}>
            <Stack screenOptions={{ headerShown: false}}>
                <Stack.Screen name="(tabs)"/>
                <Stack.Screen name="looks/[look_view_id]"/>
                <Stack.Screen name="allCategories"/>
            </Stack>
        </AppliedFilters.Provider>
    );
}