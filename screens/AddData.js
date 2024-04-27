import React, { useState } from 'react'
import { Button, Input, NativeBaseProvider,Text, VStack } from 'native-base'

export default function AddData() {
    const[title, setTitle] = useState('');
    const[body, setBody]= useState('');
    const[id, setId]= useState('');

    const saveData=()=>{
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
              title: title,
              body: body,
              userId: id,
            }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
            .then((response) => response.json())
            .then((json) => console.log(json));
    }

  return (
    <NativeBaseProvider>
      <Text fontSize='3xl' bold underLine mt = "10%" ml="30%"> Save Post</Text>
        <VStack space={4} alignItems="center" mt="15%">
            <Input mx="3" value={title} onChangeText={(e)=>{setTitle(e)}} placeholder='title' w='80%' />
            <Input mx="3" value={body} onChangeText={(e)=>{setBody(e)}} placeholder='body' w='80%' />
            <Input mx="3" value={id}  onChangeText={(e)=>{setId(e)}} placeholder='User Id' w='80%' />
            <Button size="md" variant="subtle" colorScheme="secondary" onPress={saveData}>Save Post</Button>
        </VStack>
    </NativeBaseProvider>
  )
}