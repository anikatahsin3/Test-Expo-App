import React from 'react'
import Feather from '@expo/vector-icons/Feather';
import Home from './home';
import Profile from './profile';
import { View, StyleSheet } from 'react-native';
import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';
import { BOTTOM_BAR } from './styles/bottomBar'

const Tab = createMaterialBottomTabNavigator();

export default function TabLayout() {
  return (
    <>
        <Tab.Navigator
                shifting={true}
                labeled={true}
                // barStyle={{
                //     backgroundColor: '#f8f8f8',
                //     height: 60,
                //   }}
            >
            <Tab.Screen 
                name="Home" 
                component={Home}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Feather name="home" color={color} size={24} />
                    ),
                    tabBarLabel: 'Home',
                }}
            />
            <Tab.Screen
                name="Profile" 
                component={Profile} 
                options={{
                    tabBarIcon: ({ color }) => (
                        <Feather name="user" color={color} size={24} />
                    ),
                    tabBarLabel: 'Profile',
                }}
            />
        </Tab.Navigator>

        <View style={BOTTOM_BAR.line}></View>
    </>
  )

}

