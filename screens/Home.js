import React from 'react'
import { NativeBaseProvider, Box , Button} from "native-base";


export default function Home() {
  return (
    <NativeBaseProvider>
        <Box>Hello World</Box>
        <Button size={"lg"} onPress={() => console.log("hello world")}>Click Me</Button>
    </NativeBaseProvider>
  )
}