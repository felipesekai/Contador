import React from 'react';
import { View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import User from '../User';

const Stack = createNativeStackNavigator();
const Router = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="User" component={User} />
               </Stack.Navigator>
    );
}

export default Router;