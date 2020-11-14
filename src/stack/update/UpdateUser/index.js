import React, { useState,useEffect } from 'react'
import { Text, View, StyleSheet,ImageBackground } from 'react-native'
import bg from '../../../util/img/bgtop.png'
import ButtonAction from '../../../components/atoms/ButtonAction'
import CircleAvatar from '../../../components/atoms/CircleAvatar'
import ScrollContent from '../../../components/molecules/ScrollContent'
import AuthorContact from '../../../components/molecules/AuthorContact'
import getData from '../../../services/server'

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
                <Text style={styles.title}>User Update</Text>
            </ImageBackground>
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
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
      },
    title: {
        color: '#FFFFFF',
        fontSize: 30,
        textAlign: 'center',
        marginTop: 14,
    },
    subtitle:{
        color: '#FFFFFF',
        fontSize: 20,
        textAlign: 'center',
        marginTop: 14,
    },
    text:{
        color: '#FFFFFF',
        marginTop: 14,
    },
    link:{
        color: '#FF5CAA',
        textAlign: 'center',
        marginTop: 14,
    },
    authors:{
        alignSelf: 'stretch',
    }
  });

  export default index;