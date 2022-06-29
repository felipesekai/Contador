import React, { createContext, useState, useEffect } from 'react';
import { View } from 'react-native';
import { getUser, saveUser } from '../Database';
import { ws } from '../Services/webSocket';
import { host, heroku, JOIN, INCREMENT, RESET } from '../../.envi';

export const AuthContext = createContext({});

type userModel = {
    username: string,

}

const Context = ({ children }) => {

    const [user, setUser] = useState<userModel | null >(null);
    const client = ws(`${host}/count`);
    const [count, setCount] = useState(0);

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
                reconnect();
            }
        } catch (e) {
            console.log(e)
        }

    }, [user]);

    function handleIncrementOrDecrement() {
        try {
            if (user.username) {
                send(INCREMENT);
            }

        } catch (e) {
            console.log(e)
        }


    }

    function reset() {
        try {
            if (user.username) {
                client.send(
                    JSON.stringify({ type: RESET, name: user.username })
                )
            }
        } catch (e) {

        }

    }
    function open() {
        client.onopen = (ev) => {
            console.log('connected');
            send(JOIN);
        }
    }
    function close() {
        client.onclose = (e) => {

        }
    }
    function send(type) {

        client.send(
            JSON.stringify({ type: type, name: user.username })
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

        }
    }
    function reconnect() {
        client.onreconnect = (ev) => {
            console.log(ev)

        }
    }

    function alterUser(userName) {
        client.close();
        setUser({ username: userName });
        saveUser({ username: userName });

    }

    return (
        <AuthContext.Provider value={{
            user, count,
            setCount, setUser,
            alterUser, handleIncrementOrDecrement,
            reset
        }}>
            {children}
        </AuthContext.Provider>
    );
}

export default Context;
