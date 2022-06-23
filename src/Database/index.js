import AsyncStorage from "@react-native-async-storage/async-storage";

export const saveUser =  (user) =>{
     return AsyncStorage.setItem('USER', JSON.stringify(user));
}
export const getUser =  () =>{
    return AsyncStorage.getItem('USER');
}