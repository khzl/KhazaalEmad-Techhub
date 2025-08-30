// Define Data Type 
interface CartItem{
    id: number;
    productId: number;
    quantity: number;
    cartId: number;
}

interface Cart{
    id: number;
    userId: number;
    items: CartItem[];
}

interface UpdateCartItem{
    quantity?: number;
}


export type{
    CartItem,
    Cart,
    UpdateCartItem,
};