import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import Spacer from '../TestHome/Spacer';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Colors } from '../../constants/Colors';

import { GestureHandlerRootView } from 'react-native-gesture-handler';


export default function SearchTwo() {
    return (
        <GestureHandlerRootView>
            <View>
                <Spacer height={100} />
                <View style = {styles.searchBar}>
                    <Ionicons name="search" size={24} color={Colors.GREEN} />
                    <TextInput placeholder='Search...'
                        style = {{
                            fontFamily: 'outfitRegular',
                            fontSize: 16,
                        }}
                    />
                </View>  
            </View>
        </GestureHandlerRootView>
      )
}


const styles = StyleSheet.create({
    searchBar: {
      display: 'flex',
      flexDirection: 'row',
      gap: 10,
      alignItems: 'center',
      backgroundColor: 'white',
      padding: 10,
      marginVertical: 10,
      marginHorizontal: 10,
      borderRadius: 8,
  }
  });