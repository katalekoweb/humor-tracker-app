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
import FirstComponent from "./shared/components/FirstComponent";
import { SafeAreaView } from "react-native-safe-area-context";
import MyButton from "./shared/components/MyButton";
import Routes from "./Routes";

export default function App() {
  return (
    <>
      <Routes />
    </>
  );
}
