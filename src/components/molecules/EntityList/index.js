import React from 'react'
import { View,StyleSheet } from 'react-native'
import ScrollContent from "../ScrollContent";
import CellEntity from "../CellEntity";
import InputArea from "../../atoms/InputArea";
import {useNavigation} from "@react-navigation/native";


function index(props){
    const {navigate} = useNavigation();
    function handleUpdate(){
        navigate('Entity',{ title: 'Michaś' });
    }

    return (
        <View style={styles.container}>
            <ScrollContent>
                {props.entities && props.entities.map(entity => (
                    <CellEntity
                        key={entity._id}
                        avatar = {entity.avatar}
                        title={entity.title?entity.title:entity.name}
                        onPress={handleUpdate}
                        subtitle={entity.subtitle?entity.subtitle:entity.email}/>
                    ))}
            </ScrollContent>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        width:300
    },
});

export default index;