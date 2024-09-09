import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

import Spacer from '../../components/Home/Spacer';
import { Drawer, DataTable, Badge, Button, ProgressBar, MD3Colors } from 'react-native-paper';

const numberOfItemsPerPageList = [2, 3, 4];
const items = [
    {
      key: 1,
      name: 'Page 1',
    },
    {
      key: 2,
      name: 'Page 2',
    },
    {
      key: 3,
      name: 'Page 3',
    },
  ];

export default function Test() {
    // pagination
    const [page, setPage] = React.useState(0);
    const [numberOfItemsPerPage, onItemsPerPageChange] = React.useState(numberOfItemsPerPageList[0]);
    const from = page * numberOfItemsPerPage;
    const to = Math.min((page + 1) * numberOfItemsPerPage, items.length);

    React.useEffect(() => {
        setPage(0);
     }, [numberOfItemsPerPage]);


    
  return (
    <>
        <View style = {styles.container}>
            <Spacer height={100}/>
            <Text>Testing</Text>
            <Text>Testing</Text>
            <ProgressBar 
                progress={0.5} 
                // color={MD3Colors.error50}
                color={'#ff0000'} 
                style={styles.progressBar} 
                theme={{ colors: { primary: 'green' } }}
             />
            <Text>Testing</Text>
            <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
                Press me
            </Button>
            <Badge>3</Badge>

            {/* pagination */}
            <DataTable>
                <DataTable.Pagination
                    page={page}
                    numberOfPages={Math.ceil(items.length / numberOfItemsPerPage)}
                    onPageChange={page => setPage(page)}
                    label={`${from + 1}-${to} of ${items.length}`}
                    showFastPaginationControls
                    numberOfItemsPerPageList={numberOfItemsPerPageList}
                    numberOfItemsPerPage={numberOfItemsPerPage}
                    onItemsPerPageChange={onItemsPerPageChange}
                    selectPageDropdownLabel={'Rows per page'}
                />
            </DataTable>

            
        </View>
    </>
  )
}

const styles = StyleSheet.create({
    container: {
      height: '100%',
      width: '100%',
      alignItems: 'center',
    //   backgroundColor: 'red'
    },
    progressBar: {
        width: '80%',         // To make it more prominent
        height: 10,           // Adjust height to make it more visible
        marginTop: 20, 
        backgroundColor: '#e0e0e0',      
    },
});