import { View, Button ,TextInput, StyleSheet, Text} from 'react-native'
import React from 'react'

export default function Login() {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder='Username'
      />
      <TextInput 
        placeholder='Password'/>
        <Button
            title="Login"
            color="#841584"
        />  
    </View>
  )
}


const styles = StyleSheet.create({
    container:{
        flex:1
    }
    
});