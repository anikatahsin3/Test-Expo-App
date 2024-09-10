import React from 'react'
import Feather from '@expo/vector-icons/Feather';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
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
                // activeColor='#007AFF'
                // inactiveColor='#000000'
                barStyle={{
                    backgroundColor: 'rgba(255, 255, 255, 0.75)',
                    // height: 60,
                  }}    
            >
            <Tab.Screen 
                name="Home" 
                component={Home}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Feather name="home" size={24} color="#000000" />
                    ),
                    tabBarLabel: 'Home',
                }}
            />
            <Tab.Screen
                name="Profile" 
                component={Profile}
                options={{
                    tabBarIcon: ({ color }) => (
                        <FontAwesome6 name="user-circle" size={24} color="#000000" />
                    ),
                    tabBarLabel: 'Profile',
                }}
            />
        </Tab.Navigator>

        <View style={BOTTOM_BAR.line}></View>
    </>
  )

}

