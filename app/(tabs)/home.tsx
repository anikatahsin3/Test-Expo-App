import { View, Text } from 'react-native'
import React from 'react'
import { LAYOUT } from './styles/layout'
import { HOME } from './styles/home'
import  Card  from './styles/card'

export default function Home() {
  return (
    <>
        <View style={LAYOUT.baseStructure}>
            <View style={HOME.container}>
                <View style={HOME.header}>
                    <Text>Logo</Text>
                    <Text>Name</Text>
                </View>
                <View style={HOME.body}>
                    <Text>Title</Text>
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
                            <Card 
                                logo="Card 3" 
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