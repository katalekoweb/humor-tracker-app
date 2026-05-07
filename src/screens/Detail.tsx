import { useNavigation, useRoute } from "@react-navigation/native"
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import { TNativeScreenProps, TRouteProps } from "../Routes"
import { theme } from "../shared/themes/Theme"
import BaseInput from "../shared/components/BaseInput"
import Entypo from '@expo/vector-icons/Entypo';
import Button from "../shared/components/Button"
import { useEffect, useState } from "react"
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { useSafeAreaInsets } from "react-native-safe-area-context"
import AsyncStorage from "@react-native-async-storage/async-storage"
import uuid from 'react-native-uuid';
import { format } from "date-fns"

const Detail = () => {

  const insets = useSafeAreaInsets();

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const {params} = useRoute<TRouteProps<'detail'>>()
  const navigation = useNavigation<TNativeScreenProps>();

  const [rate, setRate] = useState(params.rate || 1)
  const [datetime, setDatetime] = useState(new Date())
  const [description, setDescription] = useState('')

  const handleSave = async () => {

    let itemToSave = {
        id: "34534fre43r43",
        rate,
        datetime: datetime.getTime(),
        description
    }

    try {
      itemToSave = {
        id: params.id ?? uuid.v4(),
        rate,
        datetime: datetime.getTime(),
        description
      };

    } catch (e) {
      console.log('ERRO AQUI:', e);
    }

    try {
      const itemsAsString = await AsyncStorage.getItem('humor-items')
        .then(itemsAsString => !itemsAsString ? [] : JSON.parse(itemsAsString) as any[])

        if (params.id) {
          const index = itemsAsString.findIndex(item => item.id === params.id)

          if (index < 0) {
            itemsAsString.unshift(itemToSave)
            return
          }

          itemsAsString.splice(index, 1, itemToSave)

        } else itemsAsString.unshift(itemToSave)

      await AsyncStorage.setItem('humor-items', JSON.stringify(itemsAsString))
      
      navigation.popTo('home', {
        newItem: itemToSave
      })
    } catch (error) {
      console.log(error);      
    }

    
  }

  const handleDelete = async () => {
    try {
      const itemsAsString = await AsyncStorage.getItem('humor-items')
        .then(itemsAsString => !itemsAsString ? [] : JSON.parse(itemsAsString) as any[])

        if (params.id) {
          const index = itemsAsString.findIndex(item => item.id === params.id)

          if (index < 0) {
            return
          }

          itemsAsString.splice(index, 1)

        }

      await AsyncStorage.setItem('humor-items', JSON.stringify(itemsAsString))
      
      navigation.popTo('home', {idDeleted: params.id})

    } catch (error) {
      console.log(error);      
    }
  }

  useEffect(() => {
    if (params.id) {
      AsyncStorage.getItem('humor-items')
        .then(itemsAsString => !itemsAsString ? [] : JSON.parse(itemsAsString) as any[])
        .then(items => {
          const itemToUpdate = items.find(item => item.id === params.id)

          if (!itemToUpdate) return

          setRate(itemToUpdate.rate)
          setDescription(itemToUpdate.description)
          setDatetime(new Date(itemToUpdate.datetime))
        })
    }
  }, [params?.id])

  return (
    <>
        <View style={{...styles.footerContainer, paddingBottom: insets.bottom + 16}}>
          <Text style={styles.footerTitle}>{ 'Como está o seu humor agora?' } </Text>

          <View style={styles.footerStarContainer}>
              <TouchableOpacity onPress={() => setRate(1)}>
                <Entypo name={ rate >= 1 ? "star" : "star-outlined"} size={36} color={rate >= 1 ? theme.colors.highlight : theme.colors.textPlaceholder} /></TouchableOpacity>
              <TouchableOpacity onPress={() => setRate(2)}><Entypo name={ rate >= 2 ? "star" : "star-outlined"} size={36} color={rate >= 2 ? theme.colors.highlight : theme.colors.textPlaceholder} /></TouchableOpacity>
              <TouchableOpacity onPress={() => setRate(3)}><Entypo name={ rate >= 3 ? "star" : "star-outlined"} size={36} color={rate >= 3 ? theme.colors.highlight : theme.colors.textPlaceholder} /></TouchableOpacity>
              <TouchableOpacity onPress={() => setRate(4)}><Entypo name={ rate >= 4 ? "star" : "star-outlined"} size={36} color={rate >= 4 ? theme.colors.highlight : theme.colors.textPlaceholder} /></TouchableOpacity>
              <TouchableOpacity onPress={() => setRate(5)}><Entypo name={ rate >= 5 ? "star" : "star-outlined"} size={36} color={rate >= 5 ? theme.colors.highlight : theme.colors.textPlaceholder} /></TouchableOpacity>
            </View>
          
          <BaseInput
            label="Data e Hora" asButton={true} onPress={() => setDatePickerVisibility(!isDatePickerVisible)}
          >
            <TextInput
              value={format(datetime, "dd/MM/yyyy 'as' HH:mm ")} 
              editable={false}
              pointerEvents="none"
              placeholder="Selecione a data e hora..."
              style={styles.footerInput}
            />
          </BaseInput>

          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="datetime"
            date={datetime}
            onConfirm={(date) => {  setDatePickerVisibility(false); setDatetime(date) }}
            onCancel={() => setDatePickerVisibility(false)}
          />

          <BaseInput
            label="Mais detalhes"
          >
            <TextInput
            value={description}
            onChangeText={setDescription}
              placeholder="Escreva uma nota..."
              style={{...styles.footerInput, ...styles.footerInputArea}}
              numberOfLines={16}
            />
          </BaseInput>

          <View style={{flex: 1}} />

          <View style={styles.actionContainer}>
            { params.id && (
              <Button variant="outlined" color={theme.colors.error} onPress={handleDelete}>
              <Entypo name="trash" size={24} color={theme.colors.error} />
            </Button>
            ) }
            <Button onPress={() => navigation.goBack()} variant="outlined" grow title="Cancelar" />
            <Button grow onPress={() => handleSave()} title="Salvar" />
          </View>
        
        </View>

    </>
  )
}

const styles = StyleSheet.create({
  footerContainer: {
    gap: 15,
    padding: 15,
    flex: 1
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
  footerInputArea: {
    height: theme.fonts.sizes.body * 16,
    textAlignVertical: 'top',
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
  },
  actionContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 8
  }
});

export default Detail
