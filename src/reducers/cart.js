const Cart = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            let itemToRemove = undefined;
            state.filter((item, index) => {
                if (item.id === action.id) {
                    itemToRemove = index;
                }
            });
            if (itemToRemove !== undefined) {
                state.splice(itemToRemove, 1);
            }
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
