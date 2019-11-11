import React, { useEffect } from 'react';
import useLocalStorage from './useLocalStorage';

const useDark = () => {
    const [dark, setDark] = useLocalStorage('dark', false);

    useEffect(() => {
        const body = document.querySelector('body');
        dark ? body.classList.add('dark') : body.classList.remove('dark');
    }, [dark]);

    return [dark, setDark]
}

export default useDark