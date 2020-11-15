import React from 'react'
import { Text, View,StyleSheet,TextInput, Image } from 'react-native'


function index(props){

    return (
        <>
            <View style={styles.container}>
                <View style={styles.inputarea}>
                    <TextInput placeholder={props.placeholder} style={styles.input}/>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 300,
        height: 50,
    },
    inputarea: {
        width: 300,
        height: 35,
        backgroundColor: '#ffffffcc',
        borderRadius: 2,
    },
    input:{
        flex:1,
        paddingLeft: 5,
    }
});

export default index;