import React from 'react'
import { View,StyleSheet,ToastAndroid } from 'react-native'
import { MaterialIcons} from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler'
import {useNavigation} from "@react-navigation/native";
import { deleteData } from '../../../services/server';

function index(props){

    const {navigate} = useNavigation();

    const handleDelete = (id,type)=>{
        deleteData(type,id)
    }

    function handleCreate(){
        if(props.formRef){props.formRef.current.submitForm()}
        if(props.delete){handleDelete(props.delete.id,props.delete.type)}
        props.route && ToastAndroid.show("Operação Realizada com sucesso!", ToastAndroid.SHORT);
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