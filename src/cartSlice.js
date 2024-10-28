import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cart: {}, 
};

const cartSlice = createSlice({
    name: 'cartSlice',
    initialState,
    reducers: {
        addToCart(state, action) {
            const itemId = action.payload.id; 
            if (state.cart[itemId]) { 
                state.cart[itemId].quantity += 1;
            } else {
                state.cart[itemId] = {
                    ...action.payload,
                    quantity: 1, 
                };
            }
        },
        removeFromCart(state, action) {
            const itemId = action.payload.id; 
            delete state.cart[itemId]; 
        },
        clearCart(state) {
            state.cart = {}; 
        },
    },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
