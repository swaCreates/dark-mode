import React, {useEffect} from 'react';
import {useLocalStorage} from './useLocalStorage';

export const useDarkMode= (key, initialValue) => {

    const [darkMode, setDarkMode]= useLocalStorage(key, initialValue);

    useEffect(() => {
        if(darkMode){
           document.querySelector('body').classList.add('dark-mode');
        } else if(!darkMode){
            document.querySelector('body').classList.remove('dark-mode');
        } else{
            alert('Sorry. Code broke lol.')
        }
    }, [darkMode]);

    return [darkMode, setDarkMode];

}