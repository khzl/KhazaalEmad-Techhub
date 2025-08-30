interface Product{
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage?: number;
    rating?: number;
    stock: number;
    brand?: string;
    category: string;
    thumbnail: string;
    images?: string[];
};

interface ProductCategory{
    name: string;
};

interface ApiResponse<T>{
    data: T;
    status: number;
    message?: string;
};

export type{
    Product,
    ProductCategory,
    ApiResponse,
};