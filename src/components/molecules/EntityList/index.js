import React from 'react'
import { View,StyleSheet } from 'react-native'
import ScrollContent from "../ScrollContent";
import CellEntity from "../CellEntity";


function index(props){

    return (
        <View style={styles.container}>
            <ScrollContent>
                {props.entities && props.entities.map(entity => (
                    <CellEntity
                        key={entity._id}
                        avatar = {entity.avatar}
                        title={entity.title?entity.title:entity.name}
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