import React from 'react'
import { View,Text,StyleSheet } from 'react-native'
import CircleAvatar from '../../atoms/CircleAvatar'
import { TouchableOpacity } from 'react-native-gesture-handler'



function index(props){


    return (
        <TouchableOpacity  style={styles.container} onPress={props.onPress}>
            <CircleAvatar size={55} source={props.avatar} />
            <View style={styles.subcontainer}>
                <Text style={styles.title}>{props.title}</Text>
                <Text style={styles.subtitle}>{props.subtitle}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignSelf: 'stretch',
        paddingTop: 10,
        paddingBottom: 10,
    },
    subcontainer: {
        marginLeft: 10,
    },
    title: {
        flexDirection: 'row',
        fontSize: 14,
        color: '#E8006F',
    },
    subtitle: {
        flexDirection: 'row',
        fontSize: 14,
        color: '#FFFFFFCC',
    },
});

export default index;