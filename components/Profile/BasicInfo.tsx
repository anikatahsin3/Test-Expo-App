import { View, Text, StyleSheet, Image } from 'react-native'
import React, { useEffect, useState } from 'react';
import apiClient from 'F:/2.Ragnets/Mobile App/expoApp/services/apiClient.js';
import axios from 'axios';

export default function BasicInfo() {
    // State to store the fetched data
  const [userInfo, setUserInfo] = useState({
    name: '',
    designation: '',
    department: '',
  });

  const [test, setTest] = useState({
    // testData: '',
  });

  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxIiwiaWF0IjoxNzI1NDU2NzgxLCJleHAiOjE3MjU1NDMxODF9.MgicyOqLWYEdflyzmt9k6aC7FXZd855RrEzGnnxK9Os';

  // Fetch data when the component mounts
  useEffect(() => {
    // apiClient.get('/users') 
    //   .then(response => {
    //     const data = response.data;
        
    //     setTest({
    //         testData: data,
    //     });
    //   })
    //   .catch(error => {
    //     console.error('Error fetching data:', error);
    //   });

    const fetchData = async () => {
        try {
          const response = await axios.get('http://10.0.2.2:3000/users', {
            headers: { Authorization: `Bearer ${token}` },
          });
          const data = response.data;
          setTest(response);
  
          console.log(response);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      // Call the async function
      fetchData();
      console.log(test);
  },[]);

  return (
    <View style = {styles.container}>
        <View style = {styles.card}>
            <View style = {styles.image}>
                <Image
                    source={require('F:/2.Ragnets/Mobile App/expoApp/assets/images/iamge.png')} 
                    style={styles.imageStyle}
                />
            </View>
            <View  style = {styles.info}>
                {/* <Text>{test.testData['data'] || 'Name'}</Text> */}
                {/* <Text>{userInfo.designation || 'Designation'}</Text> */}
                {/* <Text>{userInfo.department || 'Department'}</Text> */}
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor: 'red',
    },
    card: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        width: '100%',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    image: {
        display: 'flex',
        margin: 10,
        padding: 10,
        // backgroundColor: 'blue'
    },
    info: {
        display: 'flex',
        flex: 1,
        margin: 10,
        padding: 10,
        // backgroundColor: 'green'
    },
    imageStyle: {
        width: 50, 
        height: 50, 
        borderRadius: 25, 
    },
})
