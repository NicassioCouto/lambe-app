import React from 'react'
import { View,StyleSheet } from 'react-native'
import { MaterialIcons} from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler'
import {useNavigation} from "@react-navigation/native";
import { createData } from '../../../services/server';


function index(props){

    const {navigate} = useNavigation();
    const dados = {
		name:"Só pra testar mesmo",
		value: "50",
		description: "Canais Parceiros",
		about: "A gente toca o que o cliente pedir na live."
    }

    async function createEntity(){
        createData("product",dados)
        //Alert.alert(`Entidade criada com sucesso!`)
    }

    function handleCreate(){
        if(props.create){ createEntity()}
        if(props.formRef){props.formRef.current.submitForm()}
        console.log('aaaaa')
        navigate(props.route?props.route:'Create');
    }
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.button} onPress={handleCreate}>
                        <MaterialIcons name={props.icon?props.icon:"add"} size={30} color="#E8E8E8"/>
                </TouchableOpacity>
            </View>
        )
}

const styles = StyleSheet.create({
    container: {
        zIndex:2,
        width: 80,
        height:80,
        backgroundColor:'#E8006F',
        borderRadius:50,
        position: 'absolute',
        bottom:10,
        right:10,
    },
    button: {
        width: 80,
        height:80,
        alignItems: 'center',
        justifyContent: 'center',
    },
  });

export default index;