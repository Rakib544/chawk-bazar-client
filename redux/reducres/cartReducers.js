import * as actionTypes from '../../redux/constant/cartConstant';

export const cartReducers = (state = {cartItems: []}, action) => {
    switch(action.type) {
        case actionTypes.ADD_TO_CART: 
            const item = payload;

            return {
                ...state,
                cartItems: [...state.cartItems, item]
            }
        case actionTypes.REMOVE_FROM_CART: 
            return {
                ...state,
                cartItems: state.cartItems.filter( x => x.product !== action.payload)
            }
        default: 
            return state;
    }
}