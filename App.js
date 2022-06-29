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

const colors = {
  //add colorScheme
  primary: {
    50: '#F5F5F5',
    100: '#F5F5DC',
    200: '#FDF5E6',
    300: '#FFFFF0',
    400: '#FAF0E6',
    500: '#FFF8DC',
    600: '#8B4513',
    700: '#FFEBCD',
    800: '#FFE4C4',
    900: '#FFFFE0',
  },
  amber: {
    400: '#d97706',
  },
}

// extend the theme
export const theme = extendTheme({ config, colors });

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


