import { createContext } from "react";
import { TokenData } from "util/Requests";

// Estado global da situação de login
export type AuthContextData = {
    authenticated: boolean,
    tokenData?: TokenData
};

// Definir os dados e a função
export type AuthContextType = {
    authContextData: AuthContextData,
    setAuthContextData: (authContextData: AuthContextData) => void
}

export const AuthContext = createContext<AuthContextType>({
    authContextData: {
        authenticated: false
    },
    setAuthContextData: () => null
})