let cartId = 0;
export const addToCart = product => ({
    type: 'ADD_TO_CART',
    id: cartId++,
    product
});

export const removeFromCart = product => ({
    type: 'REMOVE_FROM_CART',
    id: product.id,
    product
});
