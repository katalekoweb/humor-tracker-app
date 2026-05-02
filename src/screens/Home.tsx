import { useNavigation } from "@react-navigation/native";
import { Button, Text, View } from "react-native";
import { TNativeScreenProps } from "../Routes";

const Home = () => {
  const navigation = useNavigation<TNativeScreenProps>();

  return (
    <View style={{ padding: 20 }}>
      <Text style={{fontFamily: 'extraBold'}}>Home...</Text>
      <Button
        title="Detalhes"
        onPress={() => navigation.navigate("detail", { rate: 5000 })}
      />
      <Text>Profile...</Text>
      <Button
        title="Go to definitions"
        onPress={() => navigation.navigate("setUserName")}
      />
    </View>
  );
};

export default Home;
