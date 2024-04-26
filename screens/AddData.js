import React from 'react'
import { Button, Input, NativeBaseProvider,Text, VStack } from 'native-base'

export default function AddData() {
  return (
    <NativeBaseProvider>
      <Text fontSize='3xl' bold underLine mt = "10%" ml="30%"> Save Post</Text>
        <VStack space={4} alignItems="center" mt="15%">
            <Input mx="3" placeholder='title' w='80%' />
            <Input mx="3" placeholder='body' w='80%' />
            <Input mx="3" placeholder='User Id' w='80%' />
            <Button onPress={() => console.log("hello world")}>Click Me</Button>

        </VStack>
    </NativeBaseProvider>
  )
}