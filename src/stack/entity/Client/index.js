import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet,ImageBackground } from 'react-native'
import bg from '../../../util/img/bgtop.png';
import Entity from "../../../components/Organisms/Entity";

function index(prop){
  const entity = props.navigation.getParam("entity")
        return (
            <>
            <ImageBackground source={bg} style={styles.image}>
            <View style={styles.container}>
                {entity && <Entity entity={entity}/>}
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