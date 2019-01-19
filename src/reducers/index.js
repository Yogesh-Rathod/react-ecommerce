import { combineReducers } from 'redux';
import Cart from './cart';
import Token from './token';
import WishList from './wishlist';

export default combineReducers({
    Cart,
    Token,
    WishList
});
