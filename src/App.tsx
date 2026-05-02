import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  FlatList,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Routes from "./Routes";
import { Inter_400Regular, Inter_400Regular_Italic, Inter_800ExtraBold, useFonts } from '@expo-google-fonts/inter';
import * as SplashScreen from 'expo-splash-screen';
import {useEffect} from 'react';

export default function App() {

  const [loaded, error] = useFonts({
    extraBold: Inter_800ExtraBold,
    regular: Inter_400Regular,
    italic: Inter_400Regular_Italic
  })

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }


  return (
    <>
      <Routes />
    </>
  );
}
