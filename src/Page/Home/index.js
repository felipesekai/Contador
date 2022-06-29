import React, { useEffect, useState, useContext } from 'react';
import { View } from 'react-native';
import { Button, Center, Heading, HStack, VStack, Text } from 'native-base';
import { AuthContext } from '../../Context';
import MenssageContainer from '../Components/MenssageContainer';
import UserEdit from '../Components/UserEdit';
import { ToggleDarkMode } from '../Components/ToggleDarkMode';

const Home = () => {

    const { user, reset, handleIncrementOrDecrement, count } = useContext(AuthContext);

    return (
        <Center
            _dark={{ bg: "blueGray.900" }}
            _light={{ bg: "blueGray.50" }}

            flex={1}
        >
            <VStack mt='20' space={5} w='full' alignItems="center" h='full' justifyContent='flex-start'>


                <Heading>Contador</Heading>
                <HStack justifyContent={'space-between'}>
                    {/* if user adm ischecket */}
                    {/* {user.email &&  */}
                    <Button
                        w={50}
                        fontSize={'22px'}
                        // backgroundColor={'red.900'}
                        onPress={() => reset()}>
                        <Text fontSize={'2xl'}>-</Text>
                    </Button>
                    {/* // } */}


                    <Heading padding={5} textAlign={'center'} alignItems={'center'}>{count}</Heading>
                    {/* {user.email &&                 */}
                    <Button
                        w={'50'}
                        // backgroundColor={'blue.900'}
                        onPress={() => handleIncrementOrDecrement()}>
                        <Text fontSize={'2xl'}>+</Text>
                    </Button>
                    {/* } */}


                </HStack>

                <UserEdit color={'green'} size={25} userName={user.name} />
                <ToggleDarkMode />
                <MenssageContainer />

            </VStack>


        </Center>


    );
}

export default Home;


