import React from 'react'
// import { Tabs } from 'expo-router'
import { View, StyleSheet } from 'react-native';

import Feather from '@expo/vector-icons/Feather';
import { MaterialCommunityIcons } from '@expo/vector-icons';


import { Colors } from '../../constants/Colors';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from './profile';
import Home from './home';
import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';
import Test from './test';

// const Tab = createBottomTabNavigator();
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
                
            // screenOptions={{
            //     tabBarActiveTintColor: Colors.PRIMARY_COLOR,
            //     tabBarInactiveTintColor: 'gray',
            //   }}
            >
            <Tab.Screen 
                name="Home" 
                component={Home}
                options={{
                    // tabBarIcon: ({ color }) => (
                    //   <Feather name="home" color={color} size={size} />
                    // ),
                    // headerShown: false,

                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" size={24} color="black" />
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
            <Tab.Screen
                name="Test" 
                component={Test}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Feather name="search" color={color} size={24} />
                    ),
                    tabBarLabel: 'Test',
                    
                }}
            />
        </Tab.Navigator>

        
        <View style={styles.line}></View>
    </>
  )

}

const styles = StyleSheet.create({
    line: {
      position: 'absolute',
      bottom: 10, // Adjust position above or below the Tab bar if needed
      left: '50%',
      transform: [{ translateX: -50 }],
      width: 100, // Width of the line
      height: 4, // Height of the line
      backgroundColor: 'black', // Color of the line
      borderRadius: 10, // Rounded corners
    },
  });