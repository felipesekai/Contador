import React from 'react';
import { View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Home';

const Stack = createNativeStackNavigator();
const Router = () => {
    return (
        <Stack.Navigator>          
            <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
    );
}

export default Router;