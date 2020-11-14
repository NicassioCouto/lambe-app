import React, { Component } from 'react'
import { Text, View, StyleSheet,ImageBackground } from 'react-native'
import bg from '../../../util/img/bgtop.png';
import Entity from "../../../components/Organisms/Entity";
export default class index extends Component {
    render() {
        return (<>
            <ImageBackground source={bg} style={styles.image}>
            <View style={styles.container}>
                <Entity entity="Job"/>
            </View>
            </ImageBackground>
            </>
        )
    }
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