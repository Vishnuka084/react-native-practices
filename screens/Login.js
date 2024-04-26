import { View, Button ,TextInput, StyleSheet, Text} from 'react-native'
import React from 'react'

export default function Login() {
  return (
    <View style={styles.container}>
      <TextInput 
        style={styles.input1}
        placeholder='Username'
      />
      <TextInput 
        style={styles.input2}
        placeholder='Password'/>
        <Button
            style={styles.btn}
            title="Login"
            color="#841584"
        />  
    </View>
  )
}

const styles = StyleSheet.create({
    input1:{
        marginTop:'40%',
        padding:10,
        borderWidth:1,
        width:'80%',
    },
    input2:{
        marginTop:'2%',
        padding:10,
        borderWidth:1,
        width:'80%',
    },
    container:{
        justifyContent:'center',
        alignItems:'center'
    },
    btn:{
        width:'60%',
        color:'green',
        padding:5
    }
    
});