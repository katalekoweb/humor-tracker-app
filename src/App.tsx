import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FirstComponent from './shared/components/FirstComponent';
import { SafeAreaView } from 'react-native-safe-area-context';
import MyButton from './shared/components/MyButton';

export default function App() {
  return (
    <SafeAreaView>     
      <MyButton order={1}>
        <Text>My Button 1 alterado</Text>
      </MyButton>
      <MyButton order={2} onPress={() => console.log("Teste 2")}></MyButton>
    </SafeAreaView>
  );
}

// temas, routas, contextos

// components, hooks and functions
// const teste = () => {

// }

// function teste1 () {

// }

// function teste2() { // return jsx
//   return <View></View>
// }

// const teste3 = () => { // return jsx
//   return <View></View>
// }

// function Teste4() { // component - function that returns jsx 
//   return <View></View>
// }

// const Teste5 = () => { // component
//   return <View></View>
// }

// // hooks
// function useTeste6() {
//   const [] = useState() // useEffecy, useMemo
// }