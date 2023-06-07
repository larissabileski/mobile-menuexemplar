import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";

import Home from "./pages/Home"
import Busca from "./pages/Busca"
import Perfil from "./pages/Perfil"
import Pedidos from "./pages/Pedidos"
import Carteira from "./pages/Carteira"

const BottomTab = createBottomTabNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <BottomTab.Navigator activeColors="#333" inactiveColor="gray">
                <BottomTab.Screen name="Home"component={Home} options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color }) => (
                        <MaterialIcons name="home" color={color} size={26} />
                    ),
                }}
                />
                <BottomTab.Screen name="Home"component={Search} options={{
                    tabBarLabel: 'Search',
                    tabBarIcon: ({ color }) => (
                        <MaterialIcons name="search" color={color} size={26} />
                    ),
                }}
                />
                <BottomTab.Screen name="Profile"component={Profile} options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color }) => (
                        <MaterialIcons name="profile" color={color} size={26} />
                    ),
                }}
                />
            </BottomTab.Navigator>
        </NavigationContainer>
    )
}

// const Stack = createNativeStackNavigator();

// function HomeRoutes(){
    
// }