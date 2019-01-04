export const addToCart = product => ({
    type: 'ADD_TO_CART',
    id: product.productInfo.product.id,
    product: product
});

export const removeFromCart = product => ({
    type: 'REMOVE_FROM_CART',
    id: product.id,
    product
});
