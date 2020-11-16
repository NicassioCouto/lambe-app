import React from 'react'
import { View,Text,StyleSheet } from 'react-native'
import ButtonAction from "../../atoms/ButtonAction";
import CircleAvatar from "../../atoms/CircleAvatar";
import {TouchableOpacity} from "react-native-gesture-handler";
import {useNavigation} from "@react-navigation/native";
import ScrollContent from "../../molecules/ScrollContent";


function index(props){
    const {entity} = props

    const {navigate} = useNavigation();

    function handleUpdate(){
        navigate('Update');
    }
    function handleDelete(){
        navigate('Delete');
    }


    return (
        <>
            <ScrollContent>
            <View style={styles.container}>
                <CircleAvatar source={entity.avatar} size={180}/>
                <Text style={styles.title}>{entity.title}</Text>
                <Text style={styles.subtitle}>{entity.subtitle}</Text>
                <TouchableOpacity onPress={handleUpdate}>
                    <Text style={styles.link}>Atualizar Cadastro</Text>
                </TouchableOpacity>
                {entity.children}
                {entity.delete && (
                    <TouchableOpacity onPress={handleDelete}>
                        <Text style={styles.link}>Deletar Cadastro</Text>
                    </TouchableOpacity>
                )}
            </View>
            </ScrollContent>
            <ButtonAction />
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
    }
    });

export default index;