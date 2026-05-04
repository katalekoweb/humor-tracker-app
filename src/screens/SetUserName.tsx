import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import BaseInput from "../shared/components/BaseInput";
import { theme } from "../shared/themes/Theme";
import Button from "../shared/components/Button";
import Footer from "../shared/components/Footer";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { TNativeScreenProps } from "../Routes";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SetUserName = () => {
  const navigation = useNavigation<TNativeScreenProps>();

  const insets = useSafeAreaInsets();
  const [name, setName] = useState("");

  useEffect(() => {
    AsyncStorage.getItem('user-name').then((value) => {
      setName(value || '')
    })
  }, [])

  const handleSaveUsername = async () => {
    try {
      await AsyncStorage.setItem("user-name", name);

      navigation.popTo("home", { newName: name });
    } catch (e) {
      // saving error
    }    
  };

  return (
    <View style={{ ...styles.container, paddingBottom: insets.bottom }}>
      <Text style={styles.title}>Qual é o seu nome?</Text>

      <BaseInput label="Nome">
        <TextInput
          autoFocus
          value={name}
          onChangeText={(text: any) => setName(text)}
          placeholder="Escreva seu nome aqui..."
          style={styles.input}
        />
      </BaseInput>

      <View style={{ flex: 1 }} />

      <Button title="Salvar" onPress={handleSaveUsername}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 15,
    padding: 14,
  },
  title: {
    textAlign: "center",
    fontSize: theme.fonts.sizes.body,
    fontFamily: theme.fonts.family.regular,
    color: theme.colors.text,
  },
  input: {
    fontSize: theme.fonts.sizes.body,
    fontFamily: theme.fonts.family.regular,
    color: theme.colors.text,
    padding: 12,
  },
});

export default SetUserName;
