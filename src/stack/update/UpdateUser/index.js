import React, { useState,useEffect } from 'react'
import { Text, View, StyleSheet,ImageBackground } from 'react-native'
import bg from '../../../util/img/bgtop.png'
import Update from "../../../components/Organisms/Update";
import * as Yup from 'yup';

function index(props){
    const type = "user";
    const entity = props.route.params;
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
        {name: "cpf", type: Number, required: true},
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
                <Update entitytitle="Editar Usuário" entity={attr} type={type} id={entity._id} schema={schema} user/>
            </ImageBackground>
        </>
        )
    }


const styles = StyleSheet.create({
    container: {
        paddingTop:60,
        paddingLeft:20,
        paddingRight:20,
        flexDirection:'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
      },
    title: {
        color: '#FFFFFF',
        fontSize: 30,
        textAlign: 'center',
        marginTop: 14,
    },
    subtitle:{
        color: '#FFFFFF',
        fontSize: 20,
        textAlign: 'center',
        marginTop: 14,
    },
    text:{
        color: '#FFFFFF',
        marginTop: 14,
    },
    link:{
        color: '#FF5CAA',
        textAlign: 'center',
        marginTop: 14,
    },
    authors:{
        alignSelf: 'stretch',
    }
  });

  export default index;