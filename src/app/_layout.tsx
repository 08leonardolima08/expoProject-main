import '../styles/global.css'
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name='index'options={{title: "Home"}} />
      <Stack.Screen name='boxA'options={{title: "Bloco A"}}/>
      <Stack.Screen name='boxB'options={{title: "Bloco B"}}/>
      <Stack.Screen name='boxC'options={{title: "Bloco C"}}/>
      <Stack.Screen name='boxD'options={{title: "Bloco D"}}/>
      <Stack.Screen name='boxE'options={{title: "Bloco E"}}/>
      <Stack.Screen name='disciplinas'options={{title: "Disciplinas"}}/>
    </Stack>
  )
}
