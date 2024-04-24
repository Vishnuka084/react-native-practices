import { View, Text, TextInput, StyleSheet, Button } from 'react-native'
import React, { useState } from 'react'
import NavBar from '../components/NavBar'


export default function HomePage(props) {

    const[userName, setUserName] = useState("");
    const[password, setPassword] = useState("");

    const printState=()=>{
        console.log(userName);
        console.log(password);
    }

  return (
    <View>
      <Text>{props.pageTitle}</Text>
      <NavBar/>
      <TextInput style={styles.text_input}
        placeholder="UserName"
        value={userName}
        onChangeText={(e)=>{setUserName(e)}}
      />  
    <TextInput 
        style = {styles.text_input}
        placeholder={props.placeHolder1}
        />  

    <Button title='click to view' onPress={printState}/>

    </View>
  )
}

const styles = StyleSheet.create({
    text_input:{
        borderColor:'red',
        borderWidth:1,
        margin:5
    }
})