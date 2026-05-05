import { useNavigation, useRoute } from "@react-navigation/native";
import { Button, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from "react-native";
import { TNativeScreenProps, TRouteProps } from "../Routes";
import Header from "../shared/components/Header";
import Footer from "../shared/components/Footer";
import BaseInput from "../shared/components/BaseInput";
import { theme } from "../shared/themes/Theme";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Entypo from '@expo/vector-icons/Entypo';

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

      <View style={styles.emptyContainer}>
        <Text style={styles.emptyContentText}>
          Você ainda não {'\n'}
          registou seu humor!
          </Text>
      </View>

      <Footer>
        <View style={styles.footerContainer}>
          <Text style={styles.footerTitle}>{ name ? 'Como está o seu humor agora?' : 'Qual é o seu nome?' } </Text>
          { name ? (
            <View style={styles.footerStarContainer}>
              <TouchableOpacity onPress={() => navigation.navigate('detail', {rate: 1})} ><Entypo name="star-outlined" size={36} color={theme.colors.textPlaceholder} /></TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('detail', {rate: 2})}><Entypo name="star-outlined" size={36} color={theme.colors.textPlaceholder} /></TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('detail', {rate: 3})}><Entypo name="star-outlined" size={36} color={theme.colors.textPlaceholder} /></TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('detail', {rate: 4})}><Entypo name="star-outlined" size={36} color={theme.colors.textPlaceholder} /></TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('detail', {rate: 5})}><Entypo name="star-outlined" size={36} color={theme.colors.textPlaceholder} /></TouchableOpacity>
            </View>
          ) : (
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
          ) }
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
  emptyContainer: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center'
  },
  emptyContentText: {
    textAlign: 'center',
    fontSize: theme.fonts.sizes.subtitle,
    fontFamily: theme.fonts.family.italic,
    color: theme.colors.text,
  },
  footerStarContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8,
    paddingHorizontal: 16
  }
});

export default Home;
