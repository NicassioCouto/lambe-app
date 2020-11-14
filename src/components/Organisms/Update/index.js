import React from 'react'
import { View,Text,StyleSheet } from 'react-native'


function index(props){

    return (
        <>
            <View style={styles.container}>
                <Text style={styles.title}>Update {props.entity}</Text>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop:60,
        paddingLeft:20,
        paddingRight:20,
        flexDirection:'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title:{
        color: '#FFFFFF',
        fontSize: 30,
        textAlign: 'center',
    }
});

export default index;