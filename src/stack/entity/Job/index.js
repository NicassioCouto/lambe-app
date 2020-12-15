import React, { Component } from 'react'
import { Text, View, StyleSheet,ImageBackground } from 'react-native'
import bg from '../../../util/img/bgtop.png';
import Entity from "../../../components/Organisms/Entity";

export default function index(props){
        const entity = props.route.params
        return (<>
            <ImageBackground source={bg} style={styles.image}>
            <View style={styles.container}>
            {entity && <Entity entity={entity} delete>
            <Text style={styles.title}> Roadmap</Text>
                <Text style={styles.text}>Segue abaixo as propriedades da entidade:</Text>
                {Object.keys(entity).map((key) => (<Text style={styles.text}>{`${key}: ${entity[key]}`}</Text>))}
              </Entity>}
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
    title:{
      color: '#FFFFFF',
      marginTop: 14,
      fontSize:20,
  },
  text:{
    color: '#FFFFFF',
    marginTop: 14,
    textAlign:'left',
    width:300
},
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
      },
  });