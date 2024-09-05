import { View, Button } from 'react-native'
import React from 'react'
import Header from '../../components/Home/Header'
import Body from '../../components/Home/Body'
import { StyleSheet } from 'react-native';
import { Href, useRouter } from 'expo-router';
import { GluestackUIProvider, Text, Box, ProgressFilledTrack, Progress } from "@gluestack-ui/themed"
import { config } from "@gluestack-ui/config"

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
      <View>
      <GluestackUIProvider config={config}>
            <Box width="100%" justifyContent="center" alignItems="center">
                <Text>Open up App.js to start working on your app!</Text>
            </Box>
            
        <Progress value={40} className="w-[300px]" size="md"  >
            <ProgressFilledTrack />
        </Progress>
      
        </GluestackUIProvider>
        
      
      </View>
       
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
