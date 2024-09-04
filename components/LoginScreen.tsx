import React from 'react'
import { View, Text, Image } from 'react-native'


export default function LoginScreen() {
  return (
    <View>
      <Image source={require('../assets/images/icon.png')}
        style = {{
            justifyContent: 'center',
            alignItems: 'center',
            width:100,
            height:100,
        }}
      />
    </View>
  )
}