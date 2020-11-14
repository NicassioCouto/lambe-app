import React from 'react'
import { View,Text,StyleSheet } from 'react-native'
import ButtonAction from "../../atoms/ButtonAction";


function index(props){

    return (
        <>
            <View style={styles.container}>
                <Text style={styles.title}>Search {props.entity}</Text>
                <ButtonAction />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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