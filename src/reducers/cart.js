const Cart = (state = [], action) => {
    let cartItemToRemove = null;
    switch (action.type) {
        case 'ADD_TO_CART':
            console.log('action ', action);
            return [
                ...state,
                {
                    id: action.id,
                    product: action.product.productInfo
                }
            ];
        case 'REMOVE_FROM_CART':
            return state.filter(product => product.id !== action.id);
        default:
            return state;
    }
};

export default Cart;
