import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk  from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { productListReducer } from "./reducers/productReducers"; 
import { wishlistReducer } from "./reducers/wishlistReducers";
import { userLoginReducer } from "./reducers/userReducers";

// productDetailsReducer

const reducer = combineReducers({
    productList: productListReducer,
    // productDetails: productDetailsReducer,
    wishlist: wishlistReducer,
    userLogin: userLoginReducer,
})

const wishlistItemsFromStorage = localStorage.getItem('wishlistItems') ? JSON.parse(localStorage.getItem('wishlistItems')) : []

const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null

const initialState = {
    wishlist: { wishlistItems: wishlistItemsFromStorage }, 
    userLogin: { userInfo: userInfoFromStorage },
}

const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;