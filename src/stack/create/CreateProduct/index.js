import React, { Component } from 'react'
import { Text, View, StyleSheet,ImageBackground } from 'react-native'
import bg from '../../../util/img/bgtop.png'
import Create from "../../../components/Organisms/Create";

export default class index extends Component {
    render() {
        const type = "product";
        const attr = [
            {name: "name", type: String, required: true},
            {name: "value", type: String, required: true},
            {name: "description", type: String, required: true},
            {name: "about", type: String, required: true},
        ]
        return (<>
                <ImageBackground source={bg} style={styles.image}>
            <View style={styles.container}>
                <Create entitytitle="Novo Produto" entity={attr} type={type}/>
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