import React, { Component } from 'react'
import { Text, View, StyleSheet,ImageBackground } from 'react-native'
import bg from '../../../util/img/bgtop.png'
import Search from "../../../components/Organisms/Search";

export default class index extends Component {
    render() {
        return (<>
                <ImageBackground source={bg} style={styles.image}>
            <View style={styles.container}>
                <Search entity="Product"/>
            </View>
                </ImageBackground>
            </>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
      },
  });