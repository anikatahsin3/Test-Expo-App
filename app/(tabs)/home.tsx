import { View, Text, Image } from 'react-native'
import React from 'react'
import { LAYOUT } from './styles/layout'
import { HOME } from './styles/home'
import  Card  from './styles/card'
import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';
import Logo from '../../assets/images/home/spotfame'


export default function Home() {
  return (
    <>
        <View style={LAYOUT.baseStructure}>
            <View style={HOME.container}>
                <View style={HOME.header}>
                    <Logo/>
                    <Text style={HOME.company_name}>Name</Text>
                </View>
                <View style={HOME.body}>
                    <View style={HOME.title_container}>
                        <Text style={HOME.title}>Our Modules</Text>
                    </View>
                    <View style={HOME.card_container}>
                        <View style={HOME.card}>
                            <Card 
                                logo="Card 1" 
                                title="Admin & HRMS"
                                customStyles={{ 
                                    marginVertical: 6,
                                }} 
                            />
                            <Card 
                                logo="Card 2" 
                                title="Accounting"
                                customStyles={{ 
                                    marginVertical: 6,
                                }} 
                            />
                        </View>
                        <View style={HOME.card}>
                            {/* <Ionicons name="shirt-outline" size={24} color="black" /> */}
                            <Card 
                                logo={<Ionicons name="shirt-outline" size={24} color="black" />} 
                                title="Merchandizing" 
                                customStyles={{ 
                                    marginVertical: 6,
                                }} 
                            />
                            <Card 
                                logo="Card 4" 
                                title="Inventory" 
                                customStyles={{ 
                                    marginVertical: 6,
                                }} 
                            />
                        </View>
                        <View style={HOME.card}>
                            <Card 
                                logo="Card 5" 
                                title="Commercial" 
                                customStyles={{ 
                                    marginVertical: 6,
                                }} 
                            />
                        </View>
                    </View>
                </View>
            </View>
        </View>
    </>
  )
}