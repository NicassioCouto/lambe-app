import React, { useCallback,useRef } from 'react'
import { View,Text,StyleSheet } from 'react-native'
import FormList from "../../molecules/FormList";
import ScrollContent from "../../molecules/ScrollContent";
import ButtonAction from "../../atoms/ButtonAction";
import {Form} from "@unform/mobile";
import { updateData } from '../../../services/server';


function index(props){
    const formRef = useRef(null)
    const handleData = useCallback((data)=>{
        updateData(props.type,props.id,data);
    },[])

    return (
        <>
            <Form ref={formRef} onSubmit={handleData}>
                <ScrollContent>
                    <View style={styles.container}>
                        <Text style={styles.title}>{props.entitytitle?props.entitytitle:"Atualizarzcxcvclçcx,clmcldsvvdskof Entidade"}</Text>
                        <FormList entity={props.entity} entitytitle={props.entitytitle}/>
                    </View>
                </ScrollContent>
                <ButtonAction formRef={formRef} route="Search" icon="send"/>
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