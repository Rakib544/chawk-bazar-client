import {createStore, combineReducers, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { cartReducers } from './reducres/cartReducers';
import { getProductDetailsReducer, getProductsReducer } from './reducres/productReducers';

const reducer = combineReducers({
    cart: cartReducers,
    getProducts: getProductsReducer,
    getProductDetails: getProductDetailsReducer
})

const middleWare = [thunk];

export const store = createStore(
    reducer, 
    composeWithDevTools(applyMiddleware(...middleWare))
)