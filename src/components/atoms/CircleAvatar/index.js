import React from 'react'
import { Text, View,StyleSheet, Image } from 'react-native'


function index(props){
    const defaultimages = "https://img.pngio.com/username-icon-png-and-vector-for-free-download-pngtree-username-png-512_512.png";

        return (
            <>
                <View style={styles.container}>

                    <Image style={styles(props.size).image} source={{uri: props.source?props.source:defaultimages}} width={props.size} height={props.size}/>
                </View>
            </>
        )
}

const styles =  (size) => StyleSheet.create({
    container: {
        borderRadius: 50,
        padding: 5,
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
    },
    image: {
        width: size,
        height: size,
        borderRadius: 500,
        alignItems:'center',
        justifyContent:'center',
        margin:'auto'
      },
  });

export default index;