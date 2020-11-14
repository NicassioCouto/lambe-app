import React, { Component,useState, useEffect  } from 'react'
import { Text, View, StyleSheet,ImageBackground } from 'react-native'
import bg from '../../../util/img/bgtop.png'
import Search from "../../../components/Organisms/Search";
import getData from "../../../services/server";

function index(){
    const [product, setProduct] = useState();
    useEffect(() => {
        (async () => {
            const content = await getData("products");
            setProduct(content);
        })();
    }, []);

        return (<>
                <ImageBackground source={bg} style={styles.image}>
            <View style={styles.container}>
                <Search entity={product} placeholder="Pesquisar Produto"/>
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