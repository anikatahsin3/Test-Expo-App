import { ClerkProvider, ClerkLoaded, SignedIn, SignedOut } from '@clerk/clerk-expo'
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { ActivityIndicator, Text, View } from "react-native";
import React from 'react';


export default function RootLayout() {
    const [fontsLoaded] = useFonts({
        'outfitRegular': require('./../assets/fonts/Outfit-Regular.ttf'),
        'outfitThin': require('./../assets/fonts/Outfit-Thin.ttf'),
        'outfitExtraBold': require('./../assets/fonts/Outfit-ExtraBold.ttf'),
        'sevillana': require('./../assets/fonts/Sevillana-Regular.ttf'),
    })
    
    if (!fontsLoaded) {
        return <ActivityIndicator size="large" />;
    }

    return (
        <>
        <Stack>
            <Stack.Screen name="(tabs)" options={{
                headerShown: false
            }}/>
            <Stack.Screen name="(screen)" options={{
                headerShown: false
            }}/>
        </Stack>
        </>
    );
}
