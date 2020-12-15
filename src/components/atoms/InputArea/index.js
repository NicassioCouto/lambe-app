import React,{useEffect,useRef,useState,useCallback} from 'react'
import { Text, View,StyleSheet,TextInput } from 'react-native'
import {useField} from "@unform/core";
import DateTimePicker from '@react-native-community/datetimepicker';
import { TouchableOpacity } from 'react-native-gesture-handler';


function index(props){
    const [showDate, setshowDate] = useState(false);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const inputElementRef = useRef(null);
    const {registerField,defaultValue='',fieldName,error} = useField(props.placeholder)
    const inputValueRef = useRef({value:props.type == Date ? selectedDate.toISOString():defaultValue});

    const handleDateToogle = useCallback(()=>{setshowDate(showDate => !showDate)},[])
    const handleDateChange = useCallback((event,date)=>{
        setshowDate(false)
        if(date){setSelectedDate(date)}
    },[])

    useEffect(()=>{
        registerField({
            name:fieldName,
            ref:inputValueRef.current,
            path: 'value',
            setValue(ref,value){
                inputValueRef.current.value=value;
                inputElementRef.current.setNativeProps({text:value});
            },
            clearValue(){
                inputValueRef.current.value='';
                inputElementRef.current.clear();
            },
        })
    },[fieldName,registerField])

    return (
        <>
            <View style={styles.container}>
                <View style={styles.inputarea}>
                    {props.type == Date && (
                        <>
                            <TouchableOpacity style={styles.dateinput} onPress={handleDateToogle}>
                            <Text style={styles.dateinputtext}>{props.placeholder}: {
                            selectedDate.toLocaleDateString('pt-BR')
                            }</Text>
                            </TouchableOpacity>
                            
                        </>
                    )}
                    <TextInput 
                        ref={inputElementRef}
                        placeholder={props.placeholder} 
                        keyboardType = {props.keyboardType}
                        style={styles.input}
                        defaultValue={props.type == Date ? selectedDate.toISOString():defaultValue}
                        onChangeText={(value) =>{
                            inputValueRef.current.value = value;
                        }}
                    />
                    
                    {
                                showDate && (
                                    <DateTimePicker 
                                        mode="date"             
                                        display="spinner"
                                        value={selectedDate}
                                        onChange={handleDateChange}
                                    />
                                )
                    }
                </View>
            </View>
                <Text style={styles.error}>{error}</Text>
        </>
    )
}

const styles = StyleSheet.create({
    error: {
        width: 300,
        height:20,
        color: '#FF007A',
        justifyContent: 'center',
        marginBottom:5,

    },
    container: {
        width: 300,
        height: 40,
    },
    dateinput:{
        justifyContent: 'center',
        paddingLeft: 5,
        height: 35,
    },
    dateinputtext:{
        color:'#939393',
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