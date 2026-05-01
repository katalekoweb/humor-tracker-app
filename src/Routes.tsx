import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import Detail from "./screens/Detail";
import SetUserName from "./screens/SetUserName";

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="home">
          <Stack.Screen name="home" component={Home} />
          <Stack.Screen name="detail" component={Detail} />
          <Stack.Screen name="setUserName" component={SetUserName} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default Routes;
