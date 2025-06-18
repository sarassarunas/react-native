import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import React from 'react'
import BGImage from "@/assets/images/appBG.jpg";

const app = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={BGImage} resizeMode="cover" style={styles.image}>
      <Text style={styles.text}>App</Text>
      </ImageBackground>
    </View>
  )
}

export default app;

const styles = StyleSheet.create({
  container:{
    flex: 1,
    flexDirection: 'column',
    marginTop: 40,
  },
  image: {
    width: '100%',
    height:'100%',
    resizeMode:'cover',
    flex:'1',
    justifyContent:'center',

  },
  text:{
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  }
})