import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,ImageBackground, Text, View } from 'react-native';
import MenuBar from './src/routes/MenuBar';
import image from './src/util/img/bgbot.png';
export default function App() {
  return (
    <>
      <ImageBackground source={image} style={styles.image}>
      <MenuBar/>
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    flex: 1,
    resizeMode: "contain",
    justifyContent: "center"
  },
});
