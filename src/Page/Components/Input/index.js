import React, {useRef, useCallback} from 'react';
import { View } from 'react-native';
import { useField } from '@unform/core';
import { Input, Stack, FormControl } from 'native-base';

const InputField = ({ name, label, onChangeText, ...rest }) => {

    const inputRef = useRef(null);
    const { fieldName, registerField, defaultValue, error } = useField(name);

    useEffect(() => {
        inputRef.current.value = defaultValue;
    }, [defaultValue]);
    useEffect(() => {
        if (inputRef.current) inputRef.current.value = defaultValue;
    }, [defaultValue]);

    useEffect(() => {
        if (error) {
            setColorError('red')
        } else {
            setColorError(null)
        }
    }, [error])

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            getValue() {
                if (inputRef.current) return inputRef.current.value;

                return '';
            },
            setValue(ref, value) {
                if (inputRef.current) {
                    inputRef.current.setNativeProps({ text: value });
                    inputRef.current.value = value;
                }
            },
            clearValue() {
                if (inputRef.current) {
                    inputRef.current.setNativeProps({ text: '' });
                    inputRef.current.value = '';
                }
            },
        });
    }, [fieldName, registerField]);

    const handleChangeText = useCallback(
        text => {
            if (inputRef.current) inputRef.current.value = text;

            if (onChangeText) onChangeText(text);
        }, [onChangeText]
    );

    return (
        <Stack>
            <FormControl.Label>{label}</FormControl.Label>

            <Input
                ref={inputRef}
                variant={'outline'}
                p={2}
                placeholder={label}
                onChangeText={handleChangeText}
                {...rest}
            />
            <FormControl.ErrorMessage>{error}</FormControl.ErrorMessage>
        </Stack>
    );
}

export default InputField;