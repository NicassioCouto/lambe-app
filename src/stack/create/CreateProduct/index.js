import React, { Component } from 'react'
import { Text, View, StyleSheet,ImageBackground } from 'react-native'
import bg from '../../../util/img/bgtop.png'
import Create from "../../../components/Organisms/Create";
import * as Yup from 'yup';

export default class index extends Component {
    render() {
        const type = "product";
        const schema = Yup.object().shape({
            name: Yup.string().required('Nome obrigatório'),
            value: Yup.number().required('Valor obrigatório').min(0,'Número Inválido'),
            description: Yup.string().required('Descrição obrigatória'),
            about: Yup.string().required('Sobre obrigatório')
        });
        const attr = [
            {name: "name", type: String, required: true},
            {name: "value", type: String, required: true},
            {name: "description", type: String, required: true},
            {name: "about", type: String, required: true},
        ]
        return (<>
                <ImageBackground source={bg} style={styles.image}>
            <View style={styles.container}>
                <Create entitytitle="Novo Produto" entity={attr} type={type} schema={schema}/>
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