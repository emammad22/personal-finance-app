import React from 'react'
import { Stack } from 'expo-router'

const RootLayout = () => {
  return (
    <Stack screenOptions={{headerShown : false}}>
      <Stack.Screen name='index'/>
      <Stack.Screen name='(auth)'/>
      <Stack.Screen name='(home)'/>
    </Stack>
  )
}

export default RootLayout
