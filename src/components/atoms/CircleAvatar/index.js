import React, { useState, useEffect } from 'react'
import { Text, View,StyleSheet, Image } from 'react-native'
import aaaa from '../../../util/img/bgbot.png'

function index(props){

        return (
            <>
                <View style={styles.container}>

                    <Image style={styles(props.size).image} source={{uri: props.source}} width={props.size} height={props.size}/>
                </View>
            </>
        )
}

const styles =  (size) => StyleSheet.create({
    container: {
        borderRadius: 50,
        padding: 5,
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
    },
    image: {
        width: size,
        height: size,
        borderRadius: 500,
        alignItems:'center',
        justifyContent:'center',
        margin:'auto'
      },
  });

export default index;