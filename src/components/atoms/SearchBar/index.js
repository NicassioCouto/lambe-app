import React from 'react'
import { View,TextInput,StyleSheet } from 'react-native'

function index(props){

    return (
        <>
            <TextInput style={styles.container} placeholder={props.placeholder} />
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 300,
        height: 37,
        backgroundColor: '#E8E8E8CC',
        padding:5,
    },
});

export default index;