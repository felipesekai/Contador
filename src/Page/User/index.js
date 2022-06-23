import React, { useState, useContext } from "react";
import { Input, Button, Box, Stack, VStack, FormControl, Center } from 'native-base';
import firebase from "../../Services/firebaseConnection";
import { AuthContext } from '../../Context';
import { Keyboard, TouchableWithoutFeedback } from "react-native";
import { saveUser } from "../../Database";


export default function User() {

    const [formData, setFormData] = useState({});
    const [errors, setErrors] = useState({});
    const { setUser, entryWithoutLogin } = useContext(AuthContext);

    function verification() {
        if (formData.name === undefined) {
            setErrors({ name: 'Field is required' });
            return false;
        }

        return true;

    }

    function onSubmit() {
        if (verification()) {
            let data = { name: formData.name }
            saveUser(data).then(() => { }).catch((error) => {
                console.log(error)
            })
            setUser(data);

            // firebase.auth().signInWithEmailAndPassword(formData.email, formData.password)
            //     .then((userr)=>{
            //         let data = {email: userr.user.email}
            //         setUser(data);
            //         alert('login success')

            //     }


            //     )
            //     .catch((err) => {
            //         console.error(err);
            //     })
        }
    }



    return (
        <TouchableWithoutFeedback style={{ flex: 1 }} onPress={() => Keyboard.dismiss()}>

            <Center
                _dark={{ bg: "blueGray.900" }}
                _light={{ bg: "blueGray.50" }}
                px={4}
                flex={1}
            >
                <VStack space={5} w='full' alignItems="center" h='full' justifyContent='center'>
                    <Box w={'full'}>

                        <VStack>
                            <FormControl isRequired isInvalid={'name' in errors} >
                                <Stack>
                                    <FormControl.Label>
                                        Insira seu nome
                                    </FormControl.Label>
                                    <Input variant={'outline'} p={2} placeholder="seu nome aqui"
                                        onChangeText={(name) => setFormData({ ...formData, name: name })} />
                                    {'name' in errors && <FormControl.ErrorMessage>{errors.name}</FormControl.ErrorMessage>
                                    }
                                </Stack>
                            </FormControl>
                            <Button mt={5} onPress={onSubmit}>Entrar</Button>


                        </VStack>
                        {/* </FormControl> */}


                    </Box>
                </VStack>
            </Center>
        </TouchableWithoutFeedback>
    )
}