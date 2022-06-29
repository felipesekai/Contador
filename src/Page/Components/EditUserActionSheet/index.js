import React, { useRef, useState } from 'react';
import { Button, Actionsheet, Box, Center, NativeBaseProvider, FormControl, Input, Heading, Image } from 'native-base';

function EditUserActionSheet({ isOpen, onClose, alterName }) {
    const inputRef = useRef(null);

    const [formData, setFormData] = useState({});
    const [errors, setErrors] = useState({});

    function verification() {
        if (formData.name === undefined) {
            setErrors({ name: 'Field is required' });
            return false;
        }

        return true;

    }

    function onSubmit() {
        if (verification()) {
            alterName(formData.name);
            close();
        }

    }

    function close() {
        onClose();
        setFormData({});
        setErrors({});
    }

    return (
        <Center flex={1} px="5">

            <Actionsheet isOpen={isOpen} onClose={close} >
                <Image
                    position={'absolute'}
                    top={0}
                    w={'100%'}
                    h={'30%'}
                    source={{
                        uri: 'https://wallpaperaccess.com/full/317501.jpg'
                    }} alt="Alternate Text" />
                <Actionsheet.Content minHeight={'75%'}>


                    <Box w="100%" h={60} px={1} justifyContent="center">
                        <Heading>Alterar Nome</Heading>

                    </Box>

                    <FormControl w={'100%'} px={1} justifyContent="center" isInvalid={'name' in errors}>
                        <FormControl.Label _text={{ fontSize: 'xs', fontWeight: 'medium' }}>
                            Seu nome
                        </FormControl.Label>
                        <Input w={'100%'} rounded={'sm'} fontSize='xs' ref={inputRef}
                            onChangeText={(name) => setFormData({ ...formData, name: name })}
                        />
                        {'name' in errors && <FormControl.ErrorMessage>{errors.name}</FormControl.ErrorMessage>}
                    </FormControl>

                    <Button.Group w={'100%'} mt={5} mb={5} justifyContent='flex-end'>
                        <Button onPress={onSubmit}>Save</Button>
                        <Button colorScheme="coolGray" variant="ghost" onPress={close}>
                            Cancel
                        </Button>

                    </Button.Group>


                </Actionsheet.Content>

            </Actionsheet>
        </Center>

    );

}

export default EditUserActionSheet;
