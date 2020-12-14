import React from 'react'
import { View,Text,StyleSheet } from 'react-native'
import ScrollContent from "../ScrollContent";
import InputArea from "../../atoms/InputArea";


function index(props){
    const keyboardType = (attr) =>{
        if (attr.name == 'email'){
            return 'email-address'
        }else if(attr.name == 'phone'){
            return 'phone-pad'
        }else if(attr.name == 'value'){
            return 'decimal-pad'
        }else if(attr.name == 'cpf'){
            return 'decimal-pad'
        }else{
            return 'default'
        }
    }

    return (
        <View style={styles.container}>
            <ScrollContent>
                {props.entity && props.entity.map(attr => (<InputArea key={attr.name} placeholder={attr.name} keyboardType={keyboardType(attr)}/>))}
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