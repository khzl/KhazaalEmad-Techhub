import api from '../config/axios';
import { AxiosResponse } from 'axios';
import { CartItem, cart , UpdateCartItem } from '../types/cartType';

// API Methods With Types 
export const cartAPI = {
    create: (): Promise<AxiosResponse<cart>> =>
        api.post('/carts'),
    
    getMyCart: (): Promise<AxiosResponse<cart>> =>
        api.get('/carts/my-cart'),

    addItem: (productId: number, quantity : number = 1):
     Promise<AxiosResponse<CartItem>> =>
        api.post('/carts-items' , { productId , quantity}),

     updateItem: (itemId: number, updateData : UpdateCartItem):
     Promise<AxiosResponse<CartItem>> =>
        api.put(`/carts-items/${itemId}` , { updateData}),

     removeItem: (itemId: number):
     Promise<AxiosResponse<void>> =>
        api.delete(`/carts-items/${itemId}`),

     clearCart: (cartId: number):
     Promise<AxiosResponse<void>> =>
        api.delete(`/carts-items/cart/${cartId}/clear`),

     // Legacy Methods 
     get: (): Promise<AxiosResponse<cart>> =>
        api.get('/carts/my-cart'),

     add: (productId: number, quantity: number = 1): 
     Promise<AxiosResponse<CartItem>> =>
     api.post('/cart-items', { productId, quantity }),

     update: (itemId: number, quantity: number): 
     Promise<AxiosResponse<CartItem>> =>
     api.put(`/cart-items/${itemId}`, { quantity }),

     remove: (itemId: number):
     Promise<AxiosResponse<void>> =>
     api.delete(`/cart-items/${itemId}`),

      clear: (): 
      Promise<AxiosResponse<void>> =>
      api.get('/carts/my-cart').then((response: AxiosResponse<cart>) => 
    {
      const cartId = response.data?.id;
      if (cartId) 
        return api.delete(`/cart-items/cart/${cartId}/clear`);
      throw new Error('Cart ID not found');
    }),
};

export default cartAPI;