import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet,ImageBackground } from 'react-native'
import bg from '../../../util/img/bgtop.png';
import ButtonAction from '../../../components/atoms/ButtonAction'

function index(){
        return (
            <>
            <ImageBackground source={bg} style={styles.image}>
            <View style={styles.container}>
            </View>
            </ImageBackground>
            <ButtonAction />
            </>
        )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
      },
  });

export default index;