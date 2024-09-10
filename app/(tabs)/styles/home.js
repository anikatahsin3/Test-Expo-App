import { StyleSheet } from 'react-native';

export const HOME = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        backgroundColor: 'white'
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        backgroundColor: 'blue',
    },
    body: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        backgroundColor: 'green'
    },
    card_container: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap', 
        backgroundColor: 'yellow'
    },
    card: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '100%',
        justifyContent: 'space-between',
        borderColor: 'black',
        borderWidth: 2,
        backgroundColor: 'pink',
    }
});