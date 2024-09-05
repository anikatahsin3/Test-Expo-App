import { View, Text, Button } from 'react-native'
import React from 'react'
import Header from '../../components/Home/Header'
import Body from '../../components/Home/Body'
import { StyleSheet } from 'react-native';
import { Href, useRouter } from 'expo-router';

export default function Home() {
    const router = useRouter();
  return (
    <View style={styles.container}>
      {/* Header */}
      <Header/>

      {/* Body */}
      <Body/>

      {/* Slider */}
      <View>
        <Button
            title="Go to Details"
            onPress={() => {
            // Navigates to the details screen in newScreens folder
            router.push('screen/hrms' as Href);
            }}
        />
      </View>

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
