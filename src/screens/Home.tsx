import { useNavigation, useRoute } from "@react-navigation/native";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { TNativeScreenProps, TRouteProps } from "../Routes";
import Header from "../shared/components/Header";
import Footer from "../shared/components/Footer";
import BaseInput from "../shared/components/BaseInput";
import { theme } from "../shared/themes/Theme";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Home = () => {
  const navigation = useNavigation<TNativeScreenProps>();
  const {params} = useRoute<TRouteProps<'home'>>()
  const [name, setName] = useState('')

  useEffect(() => {
    console.log("Rodou..."); 
    setName(params?.newName || '')   
  }, [params?.newName])

  useEffect(() => {
    AsyncStorage.getItem('user-name').then((value) => {
      setName(value || '')
    })
  }, [])

  return (
    <>
      <Header name={name} />

      <View style={{ flex: 1 }} />

      <Footer>
        <View style={styles.footerContainer}>
          <Text style={styles.footerTitle}>Qual é o seu nome? </Text>
          <BaseInput
            label="Nome"
            asButton={true}
            onPress={() => navigation.navigate("setUserName")}
          >
            <TextInput
              placeholder="Escreva seu nome aqui..."
              editable={false}
              pointerEvents="none"
              style={styles.footerInput}
            />
          </BaseInput>
        </View>
      </Footer>
    </>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    gap: 15,
  },
  footerTitle: {
    textAlign: "center",
    fontSize: theme.fonts.sizes.body,
    fontFamily: theme.fonts.family.regular,
    color: theme.colors.text,
  },
  footerInput: {
    fontSize: theme.fonts.sizes.body,
    fontFamily: theme.fonts.family.regular,
    color: theme.colors.textPlaceholder,
    padding: 12,
  },
});

export default Home;
