import React from 'react';
import {StatusBar, SafeAreaView, View } from 'react-native';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold} from '@expo-google-fonts/montserrat';
import Cesta from './src/view/cesta/index';
import mock from './src/mocks/cesta';


export default function App() {
  const [fonteCarregada] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold
  });

  if(!fonteCarregada){
    return <View />
  }
  return (
    <SafeAreaView>
      <StatusBar/>
      <Cesta {...mock} />
    </SafeAreaView>   
  );
}

