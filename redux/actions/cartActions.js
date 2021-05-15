import * as actionTypes from '../../redux/actions/cartActions';

export const addToCart = (id, qty) => async (dispatch, getState) => {
    const res = something;
    const data = {};

    dispatch({
        type: actionTypes.ADD_TO_CART,
        payload: {
            productId: data.id,
            name: data.name,
            description: data.description,
            imageURL: data.img,
            price: data.price,
            totalStock: data.totalStock
        }
    })

    localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems))
}

export const removeFromCart = id => (getState, dispatch) => {
    dispatch({
        type: actionTypes.REMOVE_FROM_CART,
        payload: id
    })

    localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems))
}