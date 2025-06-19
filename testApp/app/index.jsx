import { View, Text, StyleSheet, ImageBackground, Pressable } from 'react-native'
import React from 'react'
import BGImage from "@/assets/images/appBG.jpg";
import { Link } from 'expo-router';

const app = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={BGImage} resizeMode="cover" style={styles.image}>
      <Text style={styles.title}>App</Text>
      <Link href="/contact" style={{marginHorizontal:'auto'}} asChild><Pressable style={styles.button}><Text style={styles.buttonText}>Contact Us</Text></Pressable></Link>
      <Link href="/menu" style={{marginHorizontal:'auto'}} asChild><Pressable style={styles.button}><Text style={styles.buttonText}>Menu items</Text></Pressable></Link>
      </ImageBackground>
    </View>
  )
}

export default app;

const styles = StyleSheet.create({
  container:{
    flex: 1,
    flexDirection: 'column',
    
  },
  image: {
    width: '100%',
    height:'100%',
    resizeMode:'cover',
    flex:'1',
    justifyContent:'center',

  },
  title:{
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    marginBottom: 120
  },
  link:{
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    textDecorationLine: 'underline',
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 4,
  },
  button:{
    height:60,
    width:150,
    borderRadius:20,
    backgroundColor: 'rgba(0,0,0,0.75)',
    padding:6,
    justifyContent:'center',
    marginBottom: 50,
  },
  buttonText:{
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 4,
  },
  
})