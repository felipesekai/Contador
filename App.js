import React from "react";
import {
  NativeBaseProvider,
  extendTheme,
} from "native-base";
import NativeBaseIcon from "./components/NativeBaseIcon";
import { Platform } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import AuthProvider from './src/Context';
import Router from "./src/Page/Router";

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

// extend the theme
export const theme = extendTheme({ config });

export default function App() {



  return (
    <NavigationContainer>
      <AuthProvider>
        <NativeBaseProvider theme={theme}>

          <Router />


        </NativeBaseProvider>
      </AuthProvider>
    </NavigationContainer>
  );
}


