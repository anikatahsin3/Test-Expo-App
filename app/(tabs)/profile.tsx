import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Spacer from '../../components/Home/Spacer';
import BasicInfo from '../../components/Profile/BasicInfo';
import TestFile from '../../components/Profile/TestFile';

export default function profile() {
  return (
    <View style = {styles.container}>
        <Spacer height={100}/>
        {/* <BasicInfo/> */}
        <TestFile/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      height: '100%',
      width: '100%',
      backgroundColor: '#E9F4EE',
      alignItems: 'center',
    }
});