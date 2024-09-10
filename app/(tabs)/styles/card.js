import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Card({ logo, title, customStyles = {}   }) {
    return (
      <View style={[styles.card, customStyles]}>
        <Text style={styles.cardTitle}>{logo}</Text>
        <Text>{title}</Text>
      </View>
    );
}

const styles = StyleSheet.create({
    card: {
      display: 'flex',
      flexDirection: 'row',
      width: '49%',
      justifyContent: 'start',
      alignItems: 'center',
      paddingHorizontal: 22,
      paddingVertical: 24,
      backgroundColor: 'violet',
    },
    cardTitle: {
      fontWeight: 'bold',
      fontSize: 16,
    },
});