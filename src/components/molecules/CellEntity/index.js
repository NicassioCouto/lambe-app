import React from 'react'
import { View,Text,StyleSheet } from 'react-native'
import CircleAvatar from '../../atoms/CircleAvatar'



function index(props){

    var defaultimages = "https://img.pngio.com/username-icon-png-and-vector-for-free-download-pngtree-username-png-512_512.png";
    return (
        <View style={styles.container}>
            <CircleAvatar size={55} source={props.avatar?props.avatar:defaultimages} />
            <View style={styles.subcontainer}>
                <Text style={styles.title}>{props.title}</Text>
                <Text style={styles.subtitle}>{props.subtitle}</Text>
            </View>
        </View>
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