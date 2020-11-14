import React from 'react'
import { Text, View,StyleSheet, Image } from 'react-native'
import CircleAvatar from '../../atoms/CircleAvatar'

function index(props){

    return (
        <>
            <View style={styles.container}>
                <CircleAvatar source={props.avatar} size={50}/>
                <Text style={styles.text}>{props.name}</Text>
            </View>
        </>
    )
}

const styles =  StyleSheet.create({
    container: {
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-start',
        margin: 10
    },
    text: {
        fontSize: 14,
        color: '#E8E8E8',
        marginLeft:10
    },
});

export default index;