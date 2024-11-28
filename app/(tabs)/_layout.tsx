import { colors } from "@/const/style";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Tabs } from "expo-router";

export default function Layout()
{
    return(
    <Tabs screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.hot,
    }}>
        <Tabs.Screen name="home" options=
        {{
            title: 'Home',
            tabBarIcon: ({color}) => <AntDesign color={color} size={17} name="home"/>
        }}/>
        <Tabs.Screen name="explore" options=
        {{
            title: 'Discover',
            tabBarIcon: ({color}) => <AntDesign color={color} size={17} name="search1"/>
        }}/>
    </Tabs>
    );
}