import React from 'react'
// import { Tabs } from 'expo-router'
import Feather from '@expo/vector-icons/Feather';
import { Colors } from '../../constants/Colors';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Hrms from './hrms';
import Search from './search';

const Tab = createBottomTabNavigator();

export default function ScreenLayout() {
  return (
    
    <Tab.Navigator
    screenOptions={{
        tabBarActiveTintColor: Colors.PRIMARY_COLOR,
        tabBarInactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen 
        name="HRMS" 
        component={Hrms}
        options={{
            // tabBarIcon: ({ color, size }) => (
            //   <Feather name="home" color={color} size={size} />
            // ),
            headerShown: false,
        }}
      />
      <Tab.Screen
        name="Search" 
        component={Search} 
        options={{
            // tabBarIcon: ({ color, size }) => (
            //     <Feather name="user" color={color} size={size} />
            // ),
            headerShown: false,
        }}
      />
    </Tab.Navigator>
  )
}