import React, { createContext, useState, useEffect } from 'react';
import { View } from 'react-native';
import { getUser, saveUser } from '../Database';
import { ws } from '../Services/webSocket';
import { host, heroku } from '../../.envi';

export const AuthContext = createContext({});

const Context = ({ children }) => {

    const [user, setUser] = useState(null);
    const client = ws(`${host}/count`);
    const [count, setCount] = useState(0);


    function entryWithoutLogin() {
        setUser({ not: true });
    }

    useEffect(() => {
        getUser().then((user) => {
            if (user) {
                setUser(JSON.parse(user));
            }
        })
    }, []);


    useEffect(() => {
        try {           
            if (user !== null) {
                open();
                message();
                error();
            }


        } catch (e) {
            console.log(e)
        }

    }, [user]);

    function handleIncrementOrDecrement() {
        try {
            if (user.name) {              
                    send('INCREMENT');   
            }

        } catch (e) {
            console.log(e)
        }


    }

    function reset() {
        try {
            if (user.name) {
                client.send(
                    JSON.stringify({ type: 'RESET', name: user.name })
                )
            }
        } catch (e) {

        }

    }
    function open() {
        client.onopen = (ev) => {
            console.log('connected');
            send('JOIN');
        }
    }
    function close() {
        client.onclose = (e) => {

        }
    }
    function send(type) {

        client.send(
            JSON.stringify({ type: type, name: user.name })
        )


    }
    function message() {
        client.onmessage = (ev) => {
            console.log(ev.data)
            if (ev.data) {
                let data = JSON.parse(ev.data)
                // console.log(JSON.parse(ev.data))
                setCount(data.countValue)
            }
        }
    }

    function error() {
        client.onerror = (ev) => {
            console.log(ev)           
             send("JOIN");      
        }
    }

    function alterUser(userName) {
        client.close();
        setUser({ name: userName });
        saveUser({ name: userName });

    }

    return (
        <AuthContext.Provider value={{ user, count, setCount, setUser, entryWithoutLogin, alterUser, handleIncrementOrDecrement, reset }}>
            {children}
        </AuthContext.Provider>
    );
}

export default Context;