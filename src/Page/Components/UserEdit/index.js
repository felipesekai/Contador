import React, { useContext } from 'react';
import { View } from 'react-native';
import { Text, useDisclose, Button } from 'native-base';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { BtnUser, Container } from './styles';
import EditUserActionSheet from '../EditUserActionSheet';
import { AuthContext } from '../../../Context';

const UserEdit = ({ color, size, userName }) => {

    const { alterUser } = useContext(AuthContext);

    const {
        isOpen,
        onOpen,
        onClose
    } = useDisclose();

    function handleNameChange(name) {
        alterUser(name);
    }

    return (
        <Button variant="ghost" onLongPress={onOpen} position='absolute' top={'5'} right={'0'}>
            <Container>               
                    <MaterialIcons name='face' color={'green'} size={25} />                
                <Text fontSize={12} >{userName && userName}</Text>
                <EditUserActionSheet isOpen={isOpen} onClose={onClose} alterName={handleNameChange} />
            </Container>
        </Button>);
}

export default UserEdit;