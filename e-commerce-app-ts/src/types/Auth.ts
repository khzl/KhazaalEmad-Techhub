import type { ReactNode } from "react"


// define the types for request payloads and responses
// Request payloads
interface LoginCredentials{
    email: string;
    password: string;
}

interface UserInfo{
    id: string,
    email: string,
    name: string,
    role?: string
};

interface LoginResponse {
    access_token: string,
    user: UserInfo
};

interface ChildrenType{
    children: ReactNode
};

interface RegisterData{
    name: string;
    email: string;
    password: string;
};

// Response types (adjust according to your API)
interface AuthResponse{
    data: {
        user: UserInfo;
        access_token: string;
    };
};

interface ProfileResponse{
    id: string;
    name: string;
    email: string;
};

type StatusType = "error" | "success" | "warning" | "info";

interface MessageType{
    text: string | undefined,
    status: StatusType,
};

interface LoginResult{
    success: boolean;
    error?: string;
};

interface AuthContextType{
    user: UserInfo | null;
    login: (email: string , password: string) => Promise<LoginResult>;
    logout: () => void;
    loading: boolean;
    isAuthenticated: boolean;
    isAdmin: () => boolean;
    isGuest: () => boolean;
}

export type{
    AuthContextType,
    LoginResult,
    UserInfo,
    AuthResponse,
    LoginResponse,
    ChildrenType,
    RegisterData,
    MessageType,
    ProfileResponse,
    LoginCredentials,
};