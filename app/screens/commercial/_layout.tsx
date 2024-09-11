import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Base from './base';
 

const Stack = createStackNavigator();

 export default function MerchandizingIndex() {
    return (
        <>
            <Stack.Navigator>
                <Stack.Screen name='Base' component={Base} />
            </Stack.Navigator>
        </>
    );

 }