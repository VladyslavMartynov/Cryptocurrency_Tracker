import React, { FC } from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from "./src/constants/constants";
import HomePage from "./src/pages/HomePage";
import DetailInformation from "./src/pages/DetailInformation";

const Stack = createNativeStackNavigator<RootStackParamList>();

const App: FC = (): JSX.Element => {
  return (
          <SafeAreaView style={styles.container}>
              <NavigationContainer>
                  <Stack.Navigator initialRouteName={'HomePage'} screenOptions={{header: () => null}} >
                      <Stack.Screen name="HomePage" component={HomePage}/>
                      <Stack.Screen name="DetailInformation" component={DetailInformation} />
                  </Stack.Navigator>
              </NavigationContainer>
          </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff"
    },
    headerSlogan: {
        display: "flex",
        fontSize: 28,
        color: "black",
        fontWeight: "bold",
        padding: 10
    },
    divider: {
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#A9ABB1',
    }
})

export default App;


