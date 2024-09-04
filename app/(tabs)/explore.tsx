import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Search from '../../components/Explore/Search'
import SearchTwo from '../../components/Explore/SearchTwo';

export default function explore() {
  return (
    <View style = {styles.container}>
      <Search/>
      <SearchTwo/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      height: '100%',
      width: '100%',
      backgroundColor: '#E9F4EE',
    }
});