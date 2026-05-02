import { Text } from "react-native";
import { NavigationContainer, RouteProp } from "@react-navigation/native";
import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import Detail from "./screens/Detail";
import SetUserName from "./screens/SetUserName";
import { SafeAreaView } from "react-native-safe-area-context";

type TScreensDefintions = {
  home: undefined;
  detail: { rate: number };
  setUserName: undefined;
}

const Stack = createNativeStackNavigator<TScreensDefintions>();

const Routes = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="home" 
        screenOptions={{headerShown: false}}
        screenLayout={({children}) => <SafeAreaView>{children}</SafeAreaView>}
        >
          <Stack.Screen name="home" component={Home} />

          <Stack.Group screenOptions={{
            presentation: 'formSheet',
            sheetCornerRadius: 20,           
          }}>            
            <Stack.Screen name="detail" component={Detail} options={{
              sheetAllowedDetents: [0.8, 0.9]
            }} />
            <Stack.Screen name="setUserName" component={SetUserName} options={{
              sheetAllowedDetents: [0.5, 0.6]
            }} />
          </Stack.Group>
          
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export type TNativeScreenProps = NativeStackNavigationProp<TScreensDefintions>
export type TRouteProps<T extends keyof TScreensDefintions> = RouteProp<TScreensDefintions, T>
export default Routes;
