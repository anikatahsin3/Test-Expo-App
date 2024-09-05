import React from 'react'
// import { Tabs } from 'expo-router'
import Feather from '@expo/vector-icons/Feather';
import { Colors } from '../../constants/Colors';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from './profile';
import Home from './home';

const Tab = createBottomTabNavigator();

export default function TabLayout() {
  return (
    
    <Tab.Navigator
    screenOptions={{
        tabBarActiveTintColor: Colors.PRIMARY_COLOR,
        tabBarInactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen 
        name="Home" 
        component={Home}
        options={{
            tabBarIcon: ({ color, size }) => (
              <Feather name="home" color={color} size={size} />
            ),
            headerShown: false,
        }}
      />
      <Tab.Screen
        name="Profile" 
        component={Profile} 
        options={{
            tabBarIcon: ({ color, size }) => (
                <Feather name="user" color={color} size={size} />
            ),
            headerShown: false,
        }}
      />
    </Tab.Navigator>
  )
}