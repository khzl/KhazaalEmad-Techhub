// src/types/ApiError.ts

interface ApiError{
    status: number;
    message: string;
    errors?: Record<string,string[]>;
}

interface ApiResponse<T>{
    data: T;
    Message?: string;
}

export type{
    ApiError,
    ApiResponse,
};
