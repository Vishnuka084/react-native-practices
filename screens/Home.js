import React from 'react'
import { NativeBaseProvider, Box,TextArea , Button , Switch, VStack} from "native-base";


export default function Home() {
  return (
    <NativeBaseProvider>
        <Box>Hello World</Box>
        <VStack space={4} alignItems="center">
            <Button mt={'40%'}  size="md" variant="outline" colorScheme="secondary" width={'100%'}>
                Click me 
            </Button>
            <Switch defaultIsChecked colorScheme="primary" size="sm" />
            <TextArea h={20} placeholder="Text Area Placeholder" w="75%" maxW="300" />
        
        </VStack>
        
    </NativeBaseProvider>
  )
}