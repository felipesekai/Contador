import React, { useContext } from 'react';
import { View } from 'react-native';
import Home from '../Home';
import User from '../User';
import { AuthContext } from '../../Context';

const Router = () => {
    const { user } = useContext(AuthContext);
    return ( user ? <Home/> : <User/>);
}

export default Router;