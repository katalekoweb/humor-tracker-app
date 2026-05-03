import { useNavigation } from "@react-navigation/native";
import { Button, Text, View } from "react-native";
import { TNativeScreenProps } from "../Routes";
import Header from "../shared/components/Header";
import Footer from "../shared/components/Footer";
import BaseInput from "../shared/components/BaseInput";

const Home = () => {
  const navigation = useNavigation<TNativeScreenProps>();

  return (
    <>
      <Header name={undefined} />

      <View style={{ flex: 1 }} />

      <Footer>
        <BaseInput label="Nome" asButton={true} onPress={() => navigation.navigate("setUserName")}>
          <Text style={{ fontFamily: "extraBold" }}>Definir seu nome</Text>
        </BaseInput>
      </Footer>
    </>
  );
};

export default Home;
