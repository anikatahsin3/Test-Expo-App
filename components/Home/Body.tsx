import { View, Text, Image } from 'react-native'
import { StyleSheet } from 'react-native';
import React from 'react'
import { Colors } from '../../constants/Colors';
import Spacer from './Spacer';


export default function Body() {
  return (
    <View style={styles.fullScreen}>
      <View style = {styles.container}>
      <View style={styles.headerBox}>
        <Text style={styles.headerText}>Welcome To Wonderland</Text>
      </View>
      <Spacer height={10} />
        <View style = {styles.box}>
            <Text style = { styles.text}>Immersive Virtual Experience Software</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    fullScreen: {
        flex: 1,  // Ensures it takes full height of the screen
    },
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        padding: 10,
    },
    box: {
        borderWidth: 1,
        borderColor: Colors.PRIMARY_COLOR,  
        borderRadius: 10,    
        width: '100%',           
        height: 100,         
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.SOFT_GRAY  
    },
    text: {
        color: Colors.PRIMARY_COLOR, 
        fontSize: 16,
        fontFamily: 'sevillana'
    },
    headerBox: { 
        borderRadius: 10,    
        width: '100%',                   
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerText: {
        color: Colors.PRIMARY_COLOR,  
        fontSize: 30,  
        fontFamily: 'sevillana'
    }
});