import React, { useCallback,useRef } from 'react'
import { View,Text,StyleSheet,ToastAndroid } from 'react-native'
import FormList from "../../molecules/FormList";
import ScrollContent from "../../molecules/ScrollContent";
import ButtonAction from "../../atoms/ButtonAction";
import {Form} from "@unform/mobile";
import { updateData } from '../../../services/server';
import {useNavigation} from "@react-navigation/native";


function index(props){
    const {navigate} = useNavigation();

    const getValidationError = (err)=>{
        const ve = {}
        err.inner.forEach(error=>ve[error.path]=error.message)
        return ve
    }
    const formRef = useRef(null)
    const handleData = useCallback(async(data)=>{
        try{
            formRef.current?.setErrors({})
            const schema = props.schema;
            await schema.validate(data,{
                abortEarly:false,
            });
            
            updateData(props.type,props.id,data);
            navigate(props.user?"Entity":"Search");
            ToastAndroid.show("Atualização realizada com sucesso!", ToastAndroid.SHORT);
        }catch(err){
            const errors = getValidationError(err);
            formRef.current?.setErrors(errors)
        }
    },[])

    return (
        <>
            <Form ref={formRef} onSubmit={handleData}>
                <ScrollContent>
                    <View style={styles.container}>
                        <Text style={styles.title}>{props.entitytitle?props.entitytitle:"Atualizar Entidade"}</Text>
                        <FormList entity={props.entity} entitytitle={props.entitytitle}/>
                    </View>
                </ScrollContent>
                <ButtonAction formRef={formRef} route={"Search"} icon="send" />
            </Form>
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