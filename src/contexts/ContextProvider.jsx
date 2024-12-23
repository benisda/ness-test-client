import { useState, createContext, useEffect } from "react";
export const AppContext = createContext()
export default function ContextProvider({ children }) {
    const [DHKey, setDHKey] = useState(null)
    const [isLogged, setIsLogged] = useState(false)
    const [token, setToken] = useState(null)
    const [username, setUsername] = useState(null)
    useEffect(() => {
        (async () => {
            // getDHKey();
        })()
    }, [])
    return (
        <AppContext.Provider value={{
            DHKey,
            setDHKey,
            isLogged,
            setIsLogged,
            token,
            setToken,
            username,
            setUsername
        }}>
            {children}
        </AppContext.Provider>
    )
}