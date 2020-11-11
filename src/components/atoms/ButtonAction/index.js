import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { MaterialIcons} from '@expo/vector-icons'


export default class index extends Component {
    render() {
        return (
            <>
                <View style={styles.container}>
                <MaterialIcons name="add" size={30} color="#E8E8E8"/>
                </View>
            </>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        zIndex:2,
        width: 80,
        height:80,
        backgroundColor:'#E8006F',
        borderRadius:50,
      alignItems: 'center',
      justifyContent: 'center',
      position:'absolute',
      bottom:10,
      right:10,
    }
  });