import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import BaseInput from '../shared/components/BaseInput'
import { theme } from '../shared/themes/Theme'
import Button from '../shared/components/Button'
import Footer from '../shared/components/Footer'

const SetUserName = () => {
  return (
    <View style={styles.container}>
          <Text style={styles.title}>Qual é o seu nome?</Text>

          <BaseInput
            label="Nome"
          >
            <TextInput
              autoFocus
              placeholder="Escreva seu nome aqui..."
              style={styles.input}
            />
          </BaseInput>

          <View style={{ flex: 1 }} />

          <Footer>
            <Button title='Salvar'></Button>
          </Footer>
    
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 15,
    padding: 14
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

export default SetUserName
