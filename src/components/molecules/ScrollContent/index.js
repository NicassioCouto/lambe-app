import { ScrollView } from 'react-native-gesture-handler';
import React from 'react'
import { View, StyleSheet } from 'react-native'


function index(props) {
        return (
            <>
                <View style={styles.container}>
                    <ScrollView style={styles.scroll}>
                        {props.children}
                    </ScrollView>
                </View>
            </>
        )
}

const styles = (ScreenHeight) => StyleSheet.create({
    container: {
        flex: 1,
        paddingTop:30,
        width: 300,
        alignItems: 'center',
        justifyContent: 'center',
    },
    scroll:{
        padding:30,
        alignItems: 'center',
        justifyContent: 'center',
    }
  });

  export default index;