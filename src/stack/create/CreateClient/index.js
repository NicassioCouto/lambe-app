import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet,ImageBackground } from 'react-native'
import bg from '../../../util/img/bgtop.png';
import Create from "../../../components/Organisms/Create";
import * as Yup from 'yup';

function index(){
    const type = "client";
    const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório'),
        nickname: Yup.string().required('Apelido obrigatório'),
        lastname: Yup.string().required('Sobrenome obrigatório'),
        cpf: Yup.string().required('CPF obrigatório').min(11,'CPF inválido'),
        birthday: Yup.date().required('Aniversário obrigatório'),
        avatar: Yup.string(),
        facebook: Yup.string().required('Facebook obrigatório'),
        instagram: Yup.string().required('Instagram obrigatório'),
        email: Yup.string().required('Email obrigatório').email('email inválido'),
        phone: Yup.string().required('Telefone obrigatório')
    });
    const attr = [
        {name: "name", type: String, required: true},
        {name: "nickname", type: String, required: true},
        {name: "lastname", type: String, required: true},
        {name: "cpf", type: String, required: true},
        {name:"birthday", type: Date, required: true},
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
                <Create entitytitle="Novo Cliente" entity={attr} type={type} schema={schema}/>
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