import React from 'react'
import { View,Text,StyleSheet } from 'react-native'
import ScrollContent from "../ScrollContent";
import InputArea from "../../atoms/InputArea";


function index(props){

    return (
        <View style={styles.container}>
            <ScrollContent>
                <Text style={styles.title}>{props.entitytitle?props.entitytitle:"Nova Entidade"}</Text>
                <InputArea placeholder="exemplo"/>
            </ScrollContent>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width:300
    },
    title: {
        fontSize:30,
        textAlign: 'center',
        color:'#ffffff'
    },
});

export default index;