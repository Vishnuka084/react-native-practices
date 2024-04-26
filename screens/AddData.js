import React from 'react'
import { Input, NativeBaseProvider,Text, VStack } from 'native-base'

export default function AddData() {
  return (
    <NativeBaseProvider>
      <Text fontSize='3xl' bold underLine mt = "10%" ml="30%"> Save Post</Text>
        <VStack space={4} alignItems="center" mt="15%">
            <Input mx="3" placeholder='Input' w='80%' />
            <Input mx="3" placeholder='Input' w='80%' />
            <Input mx="3" placeholder='Input' w='80%' />
            <Input mx="3" placeholder='Input' w='80%' />
            <Input mx="3" placeholder='Input' w='80%' />

        </VStack>
    </NativeBaseProvider>
  )
}