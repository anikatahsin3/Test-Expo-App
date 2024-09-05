import { View } from 'react-native'
import React from 'react'
import { Progress, ProgressFilledTrack } from '@/components/ui/progress';
import { GluestackUIProvider, Text, Box } from "@gluestack-ui/themed"
import { config } from "@gluestack-ui/config"

export default function Hrms() {
  return (
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
  )
}

