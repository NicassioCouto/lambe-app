import React from 'react'
import { View,Text,StyleSheet } from 'react-native'
import ButtonAction from "../../atoms/ButtonAction";
import SearchBar from "../../atoms/SearchBar";
import EntityList from "../../molecules/EntityList";


function index(props){
    return (
        <>
            <View style={styles.container}>
                <SearchBar placeholder={props.placeholder?props.placeholder: "pesquisar"}/>
                <EntityList entities={props.entity}/>
                <ButtonAction />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop:50,
    },
    title:{
        color: '#FFFFFF',
        fontSize: 30,
        textAlign: 'center',
    }
});

export default index;