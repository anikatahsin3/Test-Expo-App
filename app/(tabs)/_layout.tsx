import React from 'react'
import { Tabs } from 'expo-router'
import Feather from '@expo/vector-icons/Feather';
import { Colors } from '../../constants/Colors';

export default function TabLayout() {
  return (
    // creates the tab view
    <Tabs screenOptions={{ 
        headerShown: false,
        tabBarActiveTintColor: Colors.PRIMARY_COLOR,  // Color for active tab icons
        tabBarInactiveTintColor: '#444444'   // Color for inactive tab icons
    }}>
        <Tabs.Screen name = 'home'
            options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({color}) => <Feather name="home" size={24} color={color} />
            }}
        />
        <Tabs.Screen name = 'explore'
            options={{
                tabBarLabel: 'Explore',
                tabBarIcon: ({color}) => <Feather name="search" size={24} color={color} />
            }}
        />
        <Tabs.Screen name = 'profile'
            options={{
                tabBarLabel: 'Profile',
                tabBarIcon: ({color}) => <Feather name="user" size={24} color={color} />
            }}
        />
    </Tabs>
  )
}