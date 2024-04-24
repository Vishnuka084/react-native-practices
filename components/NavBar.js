import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'

export default function NavBar() {
  return (
    <View>
      <Text style={styles.text}>Vishnuka </Text>
    </View>
  )

}


const styles = StyleSheet.create({
    text:{
        color:'red'
    },
    btn:{
        color:'blue'
    }
})
