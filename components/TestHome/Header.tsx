import { View } from 'react-native'
import { StyleSheet } from 'react-native';
import React from 'react'
import Spacer from './Spacer';


export default function Header() {

  return (
    <View>
        <Spacer height={100} />
    </View>
  )
}

const styles = StyleSheet.create({
    text: {
        color: '#000', 
        fontSize: 16   
    },
    
});