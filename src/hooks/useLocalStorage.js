import React, {useState} from 'react';

export const useLocalstorage= (key, initialState= '') => {
  // set up state property
  // if local data does not have that, else use initial data
  // capture the values of the input
  // update localStorage when needed
  // Don't forget to parse data from localStorage, and stringify new data          getting stored

    const [storedValue, setStoredValue]= useState(() =>{
        if(JSON.parse(window.localStorage.getItem(key))){
            return JSON.parse(window.localStorage.getItem(key));
        } else{
            window.localStorage.setItem(key, JSON.stringify(initialState))
            return initialState;
        }
    })

    const setValue= value =>{
        setStoredValue(value);
        window.localStorage.setItem(key, JSON.stringify(value));
    }

    return [storedValue, setValue];

}