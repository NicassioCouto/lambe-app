import React, { useState,useEffect } from 'react'
import { Text, View, StyleSheet,ImageBackground } from 'react-native'
import bg from '../../util/img/bgtop.png'
import ButtonAction from '../../components/atoms/ButtonAction'
import CircleAvatar from '../../components/atoms/CircleAvatar'
import ScrollContent from '../../components/molecules/ScrollContent'
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
            <ScrollContent>
            {user && (
                <>
                    <CircleAvatar source={user[0].avatar} size={180}/>
                    <Text style={styles.title}>{user[0].name}</Text>
                    <Text style={styles.subtitle}>{user[0].email}</Text>
                    <Text style={styles.link}>Atualizar Cadastro</Text>
                    <Text style={styles.text}>Este aplicativo é um projeto da matéria “Processos de Desenvolvimento de Software” do Curso de Sistemas de Informação realizado no Instituto Federal de Educação, Ciência e Tecnologia - Bahia ministrado por Crijina Chagas. O intuito do aplicativo é o puro aprendizado, mas, se você gostou da proposta e acredita que ele possa ser útil para você, por favor colabore com o nosso projeto, faça uma avaliação na play store e no ajude a divulgá-lo.</Text>
                </>
            )}
            </ScrollContent>
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
  });

  export default index;