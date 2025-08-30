import React, { createContext, useState, useEffect } from "react";
import type { ReactNode } from "react";
import AuthAPI from "../api/authAPI";
import type { UserInfo, LoginResult , AuthContextType , LoginCredentials } from "../types/Auth";

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps{
    children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({children}) => {
    const [user,setUser] = useState<UserInfo | null>(null);
    const [loading,setLoading] = useState<boolean>(true);

    useEffect(() => {
    const token = localStorage.getItem('token');
    const userData = localStorage.getItem('user');

    if (token && userData) {
      setUser(JSON.parse(userData));
    }
    setLoading(false);
    }, []);

    const login = async (email: string, password: string): Promise<LoginResult> => {
    try {
      const response = await AuthAPI.login({ email, password } as LoginCredentials);
      const { user: loggedUser, access_token } = response.data.data;

      setUser(loggedUser);
      localStorage.setItem('token', access_token);
      localStorage.setItem('user', JSON.stringify(loggedUser));

      return { success: true };
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : "Unknown error";
      return {
         success: false,
         error: message
      };
    }
};

 const logout = () => {
    setUser(null);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  };

  const isAdmin = (): boolean => user?.role === 'SUPER_ADMIN';
  const isGuest = (): boolean => !user;

   const value: AuthContextType = {
    user,
    login,
    logout,
    loading,
    isAuthenticated: !!user,
    isAdmin,
    isGuest,
  };

  return (
     <AuthContext.Provider value={value}>
        {children}
     </AuthContext.Provider>
  );

};