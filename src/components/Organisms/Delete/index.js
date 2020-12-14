import React from 'react'
import { View,Text,StyleSheet } from 'react-native'
import CircleAvatar from "../../atoms/CircleAvatar"
import ButtonAction from '../../../components/atoms/ButtonAction'
import { Dimensions } from 'react-native';


function index(props){
    const entity = props.entity;
    const windowWidth = Dimensions.get('window').width;
    const del = {id:entity._id,type:props.type}

    return (
        <>
            <View style={styles(windowWidth).container}>
                <CircleAvatar source={props.entity.avatar} size={180}/>
                <Text style={styles(windowWidth).title}>Deseja excluir {entity.title?entity.title:entity.name} ?</Text>
                <Text style={styles(windowWidth).subtitle}>Esta ação não pode ser desfeita</Text>
                <ButtonAction route="Search" delete={del} icon="delete"/>
            </View>
        </>
    )
}

const styles =  (windowWidth) => StyleSheet.create({
    container: {
        flex:1,
        width:windowWidth,
        paddingTop:60,
        paddingLeft:20,
        paddingRight:20,
        flexDirection:'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#49010F8C',
    },
    title:{
        marginTop:40,
        color: '#FFFFFF',
        fontSize: 20,
        textAlign: 'center',
        width: 180,
    },
    subtitle:{
        marginTop:10,
        color: '#FFB9DA',
        fontSize: 16,
        textAlign: 'center',
        width: 200,
    }
});

export default index;