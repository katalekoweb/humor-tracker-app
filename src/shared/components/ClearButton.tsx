import { useNavigation } from "@react-navigation/native";
import { Alert, Text, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type TNativeScreenProps = NativeStackNavigationProp<any>;

export function ClearButton() {
  const navigation = useNavigation<TNativeScreenProps>();

  return (
    <TouchableOpacity
      style={{ paddingHorizontal: 12 , alignItems: 'center', justifyContent: 'center'}}
      onPress={() => {
        Alert.alert("Confirmação", "Tem certeza?", [
          { text: "Cancelar", style: "cancel" },
          {
            text: "Confirmar",
            onPress: async () => {
              await AsyncStorage.removeItem("user-name");
              await AsyncStorage.removeItem("humor-items");

              navigation.reset({
                index: 0,
                routes: [{ name: "home" }]
              });
            }
          }
        ]);
      }}
    >
      <Text style={{ color: "red" }}>Limpar dados</Text>
    </TouchableOpacity>
  );
}