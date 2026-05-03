import React from 'react'
import { Text, TextInput } from 'react-native'
import BaseInput from '../shared/components/BaseInput'

const SetUserName = () => {
  return (
    <>
      <Text>Set user name</Text>

      <BaseInput label="Nome">
          <TextInput placeholder='Digite seu nome' />
      </BaseInput>
    </>
  )
}

export default SetUserName
