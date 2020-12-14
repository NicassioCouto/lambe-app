import React,{useEffect,useRef} from 'react'
import { Text, View,StyleSheet,TextInput, Image } from 'react-native'
import {useField} from "@unform/core";


function index(props){
    const {registerField,defaultValue='',fieldName,error} = useField(props.placeholder)
    const inputValueRef = useRef({value:defaultValue});

    useEffect(()=>{
        registerField({
            name:fieldName,
            ref:inputValueRef.current,
            path: 'value',
        })
    },[fieldName,registerField])

    return (
        <>
            <View style={styles.container}>
                <View style={styles.inputarea}>
                    <TextInput 
                        placeholder={props.placeholder} 
                        style={styles.input}
                        defaultValue={defaultValue}
                        onChangeText={(value) =>{
                            inputValueRef.current.value = value;
                        }}
                    />
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 300,
        height: 50,
    },
    inputarea: {
        width: 300,
        height: 35,
        backgroundColor: '#ffffffcc',
        borderRadius: 2,
    },
    input:{
        flex:1,
        paddingLeft: 5,
    }
});

export default index;