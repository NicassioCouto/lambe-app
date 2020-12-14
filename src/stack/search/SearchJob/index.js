import React, { Component,useState, useEffect } from 'react'
import { Text, View, StyleSheet,ImageBackground } from 'react-native'
import bg from '../../../util/img/bgtop.png';
import Search from "../../../components/Organisms/Search";
import getData from "../../../services/server";


function index({ navigation }){
    const [job, setJob] = useState();
    useEffect(() => {
        const pageUpdate = navigation.addListener('focus', async() => {
            const content = await getData("jobs");
            setJob(content);
          });
        
          return pageUpdate;
    }, []);
        return (<>
            <ImageBackground source={bg} style={styles.image}>
            <View style={styles.container}>
                <Search entity={job} placeholder="Pesquisar Trampo"/>
            </View>
            </ImageBackground>
            </>
        )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
      },
  });
export default index;