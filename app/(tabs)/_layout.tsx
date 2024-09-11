import React from 'react'
import Home from './home';
import Profile from './profile';
import { View } from 'react-native';
import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';
import { BOTTOM_BAR } from './styles/bottomBar'
import icon from '../../assets/images/home/svg'


const Tab = createMaterialBottomTabNavigator();

export default function TabLayout() {
  return (
    <>
        <Tab.Navigator
                shifting={true}
                labeled={true}
                barStyle={{
                    backgroundColor: 'rgba(255, 255, 255, 0.75)',

                  }}    
            >
            <Tab.Screen 
                name="Home" 
                component={Home}
                options={{
                    tabBarIcon: ({ color }) => (
                        <icon.HOME/>
                    ),
                    tabBarLabel: 'Home',
                }}
            />
            <Tab.Screen
                name="Profile" 
                component={Profile}
                options={{
                    tabBarIcon: ({ color }) => (
                        <icon.USER_CIRCLE/>
                    ),
                    tabBarLabel: 'Profile',
                }}
            />
        </Tab.Navigator>

        <View style={BOTTOM_BAR.line}></View>
    </>
  )

}

