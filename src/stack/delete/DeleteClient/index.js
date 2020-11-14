import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet,ImageBackground } from 'react-native'
import bg from '../../../util/img/bgtop.png';
import ButtonAction from '../../../components/atoms/ButtonAction'
import Delete from "../../../components/Organisms/Delete";

function index(){
        return (
            <>
            <ImageBackground source={bg} style={styles.image}>
            <View style={styles.container}>
                <Delete entity="Client"/>
            </View>
            </ImageBackground>
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