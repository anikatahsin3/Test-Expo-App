import { StyleSheet } from 'react-native';

export const BOTTOM_BAR = StyleSheet.create({
    line: {
      position: 'absolute',
      bottom: 10, // Adjust position above or below the Tab bar if needed
      left: '50%',
      transform: [{ translateX: -50 }],
      width: 100, // Width of the line
      height: 4, // Height of the line
      backgroundColor: 'black', // Color of the line
      borderRadius: 10, // Rounded corners
    },
});