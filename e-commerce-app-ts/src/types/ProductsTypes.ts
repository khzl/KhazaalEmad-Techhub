interface ProductResponse{
    id: string;
    name: string;
    description: string;
    price: number;
    discount: string;
    stock: number;
    categoryID: string;
    category: string;
    productImages: string[];
    createdAt: string;
    updatedAt: string;
};

interface ProductRequest{
    name: string,
    description: string,
    price: number;
};

export type{
    ProductResponse,
    ProductRequest,
};