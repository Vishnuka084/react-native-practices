import { View, TouchableOpacity ,TextInput, StyleSheet, Text} from 'react-native'
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
      <TouchableOpacity style={styles.btn} >
        <Text style={{color:'#ffff',fontSize:16}}>Login</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    input1:{
        marginTop:'40%',
        padding:10,
        borderWidth:1,
        width:'80%',
        borderRadius:100
        
    },
    input2:{
        marginTop:'2%',
        padding:10,
        borderWidth:1,
        width:'80%',
        borderRadius:100
    },
    container:{
        justifyContent:'center',
        alignItems:'center'
    },
    btn:{
        marginTop:5,
        width:'60%',
        backgroundColor:'green',
        padding:5,
        height:50,
        justifyContent:'center',
        alignItems:'center'
    }
    
});