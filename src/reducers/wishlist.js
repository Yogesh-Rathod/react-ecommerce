const WishList = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TO_WISHLIST':
            // Remove If item already in wishlist
            let itemToRemove = undefined;
            state.filter((item, index) => {
                if (item.product.id === action.product.selectedProduct.id) {
                    itemToRemove = index;
                }
                return itemToRemove;
            });
            if (itemToRemove !== undefined) {
                state.splice(itemToRemove, 1);
            }
            if (itemToRemove !== undefined) {
                return [...state];
                // Remove If item already in wishlist
            } else {
                return [
                    ...state,
                    {
                        product: action.product.selectedProduct
                    }
                ];
            }
        default:
            return state;
    }
};

export default WishList;
