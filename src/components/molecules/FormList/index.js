import React from 'react'
import { View,Text,StyleSheet } from 'react-native'
import ScrollContent from "../ScrollContent";
import InputArea from "../../atoms/InputArea";


function index(props){

    return (
        <View style={styles.container}>
            <ScrollContent>
                {props.entity && props.entity.map(attr => (<InputArea key={attr.name} placeholder={attr.name}/>))}
            </ScrollContent>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width:300,
        marginTop:30
    },
    title: {
        fontSize:30,
        textAlign: 'center',
        color:'#ffffff'
    },
});

export default index;