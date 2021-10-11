import React, { createContext } from 'react';
import useFirebase from '../../Hooks/useFirebase';

export const authContexts = createContext();

const ContextProvider = ({children}) => {
   
    const allContexts = useFirebase();
    return (
        <authContexts.Provider value={allContexts}>
            {children}
        </authContexts.Provider>
    );
};

export default ContextProvider;