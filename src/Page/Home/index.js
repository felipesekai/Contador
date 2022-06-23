import React, { useEffect, useState, useContext } from 'react';
import { View } from 'react-native';
import { Button, Center, Heading, HStack, VStack, Text } from 'native-base';
import { AuthContext } from '../../Context';

import UserEdit from '../Components/UserEdit';
import { ToggleDarkMode } from '../Components/ToggleDarkMode';

const Home = () => {

    const { user, reset, handleIncrementOrDecrement, count } = useContext(AuthContext);
   
    return (
        <Center
            _dark={{ bg: "blueGray.900" }}
            _light={{ bg: "blueGray.50" }}
            px={4}
            flex={1}
        >
            <VStack space={5} w='full' alignItems="center" h='full' justifyContent='center'>
      

                <Heading                
                >Contador</Heading>
                <HStack justifyContent={'space-between'}>
                    {/* if user adm ischecket */}
                    {/* {user.email &&  */}
                    <Button 
                        w={70}
                        fontSize={'22px'}
                        backgroundColor={'red.900'}
                        onPress={() => reset()}>
                        <Text fontSize={'2xl'}>-</Text>
                    </Button>
                    {/* // } */}


                    <Heading  padding={5} textAlign={'center'} alignItems={'center'}>{count}</Heading>
                    {/* {user.email &&                 */}
                    <Button
                        w={'70'}
                        backgroundColor={'blue.900'}
                        onPress={() => handleIncrementOrDecrement()}>
                        <Text fontSize={'2xl'}>+</Text>
                    </Button>
                    {/* } */}


                </HStack>

                <UserEdit color={'green'} size={25} userName={user.name} />
                <ToggleDarkMode />
              
            </VStack>



        </Center>


    );
}

export default Home;


