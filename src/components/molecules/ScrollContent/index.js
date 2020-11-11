import { ScrollView } from 'react-native-gesture-handler';
import React from 'react'
import { View, StyleSheet } from 'react-native'


function index(props) {
        return (
            <>
                <View style={styles.container}>
                    <ScrollView>
                        {props.children}
                    </ScrollView>
                </View>
            </>
        )
}

const styles = StyleSheet.create({
    container: {
        width: 300,
        height:523,
        alignItems: 'center',
        justifyContent: 'center',
    }
  });

  export default index;