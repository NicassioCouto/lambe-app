import React, { useState,useEffect } from 'react'
import { Text, View, StyleSheet,ImageBackground } from 'react-native'
import bg from '../../util/img/bgtop.png'
import ButtonAction from '../../components/atoms/ButtonAction'
import CircleAvatar from '../../components/atoms/CircleAvatar'
import getData from '../../services/server'

function index(){
    const [user, setUser] = useState();
    useEffect(() => {
        (async () => {
          const content = await getData("users");
          setUser(content);
        })();
      }, []);

        return (
        <>
            <ImageBackground source={bg} style={styles.image}>
            <View style={styles.container}>
            {user && <CircleAvatar source={user[0].avatar} size={180}/>}
            </View>
            </ImageBackground>
            <ButtonAction />
            </>
        )
    }


const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
      },
  });

  export default index;