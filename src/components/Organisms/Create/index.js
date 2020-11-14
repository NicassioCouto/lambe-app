import React from 'react'
import { View,Text,StyleSheet } from 'react-native'
import ScrollContent from "../../molecules/ScrollContent";
import CircleAvatar from "../../atoms/CircleAvatar";
import {TouchableOpacity} from "react-native-gesture-handler";
import ButtonAction from "../../atoms/ButtonAction";


function index(props){

    return (
        <>
            <ScrollContent>
                <View style={styles.container}>

                </View>
            </ScrollContent>
            <ButtonAction route="Search" icon="send"/>
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