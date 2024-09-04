import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import Spacer from '../Home/Spacer';


export default function Explore() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (query: React.SetStateAction<string>) => {
    setSearchQuery(query);
  };

  return (
    <View style={styles.container}>
      <View>
        <Spacer height={100}/>
        <TextInput
            style={styles.input}
            value={searchQuery}
            onChangeText={handleSearchChange}
            placeholder="Search..."
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  input: {
    height: 40,
    width: '80%',
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  }
});
