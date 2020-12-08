import React, { useState,useEffect }  from 'react'
import { View,Text,StyleSheet, Alert } from 'react-native'
import ScrollContent from "../../molecules/ScrollContent";
import FormList from "../../molecules/FormList";
import ButtonAction from "../../atoms/ButtonAction";
import createData from '../../../services/server';

function index(props){
    /*const dados = {
        name:"FOi",
        nickname:"Foi",
        lastname: "FOi",
        cpf: "000.000.000-00",
        birthday: "28/02/1997",
        avatar: "https://i.pinimg.com/280x280_RS/73/48/b3/7348b354734a97a3abd7df51020bc66e.jpg",
        facebook:"@filipecancio",
        instagram: "@cancitoo",
        email: "filipe.cancio@gmail.com",
        phone: "77 99999-7777"
    }*/
    


    return (
        <>
            <ScrollContent>
                <View style={styles.container}>
                    <Text style={styles.title}>{props.entitytitle?props.entitytitle:"Nova Entidade"}</Text>
                    <FormList entity={props.entity} entitytitle={props.entitytitle}/>
                </View>
            </ScrollContent>
            <ButtonAction route="Search" icon="send" create/>
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
    title:{
        color: '#FFFFFF',
        fontSize: 30,
        textAlign: 'center',
    }
});

export default index;