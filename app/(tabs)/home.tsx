import { View, Text, Image } from 'react-native'
import React from 'react'
import { LAYOUT } from './styles/layout'
import { HOME } from './styles/home'
import  Card  from './styles/card'
import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';
import icon from '../../assets/images/home/svg'


export default function Home() {
  return (
    <>
        <View style={LAYOUT.baseStructure}>
            <View style={HOME.container}>
                <View style={HOME.header}>
                    <icon.SPOTFAME_LOGO/>
                    <Text style={HOME.company_name}>SPOTFAME</Text>
                </View>
                <View style={HOME.body}>
                    <View style={HOME.title_container}>
                        <Text style={HOME.title}>Our Modules</Text>
                    </View>
                    <View style={HOME.card_container}>
                        <View style={HOME.card}>
                            <Card 
                                logo={<icon.OFFICE_CHAIR/>} 
                                title="Admin & HRMS"
                                customStyles={{ 
                                    marginVertical: 6,
                                }} 
                            />
                            <Card 
                                logo={<icon.COMPUTER_DOLLAR/>}
                                title="Accounting"
                                customStyles={{ 
                                    marginVertical: 6,
                                }} 
                            />
                        </View>
                        <View style={HOME.card}>
                            {/* <Ionicons name="shirt-outline" size={24} color="black" /> */}
                            <Card 
                                logo={<icon.SHIRT_01/>} 
                                title="Merchandizing" 
                                customStyles={{ 
                                    marginVertical: 6,
                                }} 
                            />
                            <Card 
                                logo={<icon.DASHBOARD_BROWSING/>} 
                                title="Inventory" 
                                customStyles={{ 
                                    marginVertical: 6,
                                }} 
                            />
                        </View>
                        <View style={HOME.card}>
                            <Card 
                                logo={<icon.ALIGN_BOX_TOP_LEFT/>} 
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