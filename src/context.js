import {createContext} from 'react';

export const ShopContext = createContext(undefined);

export const ContextProvider = ({children}) => {
    const value = {
        example: 'test'
    }

    return (
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider>
    )
}