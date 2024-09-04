import { View, Text } from 'react-native'
import React from 'react'
import Header from '../../components/Home/Header'
import Body from '../../components/Home/Body'
import { StyleSheet } from 'react-native';

export default function home() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <Header/>

      {/* Body */}
      <Body/>

      {/* Slider */}

      {/* Category  */}

      {/* Popular Business List */}
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#E9F4EE',
    }
});
