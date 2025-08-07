import { createContext,useContext,useState } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);

    const login = (email,password) => {
        if (email && password)
        {
            setUser({name:"Student",email});
            return true;
        }
        return false;
    };

    const logout = () => setUser(null);

    const value = {
        user,
        login,
        logout
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};