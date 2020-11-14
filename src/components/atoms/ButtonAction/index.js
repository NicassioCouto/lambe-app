import React from 'react'
import { View,StyleSheet } from 'react-native'
import { MaterialIcons} from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler'


function index(){

    function handleCreate(){
        navigate('Create');
    }
        return (
            <>
                <TouchableOpacity onPress={handleCreate}>
                    <View style={styles.container}>
                        <MaterialIcons name="add" size={30} color="#E8E8E8"/>
                    </View>
                </TouchableOpacity>
            </>
        )
}

const styles = StyleSheet.create({
    container: {
        zIndex:2,
        width: 80,
        height:80,
        backgroundColor:'#E8006F',
        borderRadius:50,
      alignItems: 'center',
      justifyContent: 'center',
      position:'absolute',
      bottom:10,
      right:10,
    }
  });

export default index;