import { StyleSheet } from 'react-native';

export const HOME = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        backgroundColor: '#FFFFFF'
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        // backgroundColor: 'blue',
        backgroundColor: '#FFFFFF',
        paddingVertical: 12,
    },
    company_name: {
        color: 'black',
        fontSize: 20.78,
        fontWeight: '600',
        textTransform: 'uppercase',
        lineHeight: 24.94,
        wordwrap: 'break-word',
    },
    title_container: {
        marginTop: 29,
        marginBottom: 18,
    },
    title: {
        color: 'black',
        fontSize: 24,
        fontWeight: '600',
        lineHeight: 28.80,
        wordwrap: 'break-word',
    },
    body: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        backgroundColor: '#FFFFFF',
        // backgroundColor: 'green'
    },
    card_container: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap', 
        backgroundColor: '#FFFFFF',
        // backgroundColor: 'yellow'
    },
    card: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '100%',
        justifyContent: 'space-between',
        // borderColor: 'black',
        // borderWidth: 2,
        backgroundColor: '#FFFFFF',
        // backgroundColor: 'pink',
    }
});