import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet,ImageBackground } from 'react-native'
import bg from '../../../util/img/bgtop.png';
import Create from "../../../components/Organisms/Create";

function index(){
    const attr = [
        {name: "name", type: String, required: true},
        {name: "nickname", type: String, required: true},
        {name: "lastname", type: String, required: true},
        {name: "cpf", type: String, required: true},
        {name:"birthday", type: String, required: true},
        {name:"avatar", type: String, required: true},
        {name:"facebook", type: String, required: true},
        {name:"instagram", type: String, required: true},
        {name:"email", type: String, required: true},
        {name:"phone",type: String, required: true}
    ]
        return (
            <>
            <ImageBackground source={bg} style={styles.image}>
            <View style={styles.container}>
                <Create entitytitle="Novo Cliente" entity={attr}/>
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