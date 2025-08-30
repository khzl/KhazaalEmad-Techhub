import api from "../config/axios";
import type { LoginCredentials, RegisterData , AuthResponse , ProfileResponse } 
from "../types/Auth";

export const AuthAPI = {
    login: (Credential: LoginCredentials) =>
        api.post<AuthResponse>('/auth/login' , Credential),
    register: (userData: RegisterData) =>
        api.post<AuthResponse>('/auth/register', userData),
    getProfile: () =>
        api.get<ProfileResponse>('/auth/me'),
};

export default AuthAPI;