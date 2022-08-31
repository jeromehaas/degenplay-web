import { createContext, useState } from "react"

const AppContext = createContext();

const AppProvider = ({ children }) => {

    const [ isLoading, setIsLoading ]  = useState(true);
    const [ isLoggedIn, setIsLoggedIn ]  = useState(false);

    return (
        <AppContext.Provider value={{ isLoading, setIsLoading, isLoggedIn, setIsLoggedIn }}>
            { children }
        </AppContext.Provider>
    );

}

export {
    AppProvider,
    AppContext
};