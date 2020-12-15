import React, { Component } from 'react'
import { Text, View, StyleSheet,ImageBackground } from 'react-native'
import bg from '../../../util/img/bgtop.png';
import Create from "../../../components/Organisms/Create";
import * as Yup from 'yup';
export default class index extends Component {
    render() {
        const type = "job";
        const schema = Yup.object().shape({
            client: Yup.string().required('Cliente obrigatório'),
            product: Yup.string().required('Produto obrigatório'),
            scheduling: Yup.string(),
            title: Yup.string().required('Título obrigatório'),
            subtitle: Yup.string().required('Subtítulo obrigatório'),
            description: Yup.string()
        });
        const attr = [
            {name: "client", type: String, required: true},
            {name: "product", type: String, required: true},
            {name: "scheduling", type: String, required: true},
            {name: "title", type: String, required: true},
            {name:"subtitle", type: String, required: true},
            {name:"description", type: String, required: true},
        ]
        return (<>
            <ImageBackground source={bg} style={styles.image}>
            <View style={styles.container}>
                <Create entitytitle="Novo Trampo" entity={attr} type={type} schema={schema}/>
            </View>
            </ImageBackground>
            </>
        )
    }
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