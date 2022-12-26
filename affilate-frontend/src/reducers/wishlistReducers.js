import { WISHLIST_ADD_ITEM, WISHLIST_REMOVE_ITEM } from "../constants/wishlistConstants";

export const wishlistReducer = (state = { wishlistItems: [] }, action) => {
    switch(action.type) {
        case WISHLIST_ADD_ITEM:
            // return { 
            //     ...state,
            //     wishlistItems: [...state.wishlistItems, action.payload] 
            // };

            const item = action.payload

            const exitItem = state.wishlistItems.find((product) => product.id === item.id)

            if(exitItem) {
                return {
                    ...state,
                    wishlistItems: state.wishlistItems.map((product) => product.id === exitItem.product ? item : product)
                    // wishlistItems: [...state.wishlistItems]

                }
            } else {
                return {
                    ...state, 
                    wishlistItems: [...state.wishlistItems, item]
                }
            }   

        case WISHLIST_REMOVE_ITEM:
            return {
                ...state,
                wishlistItems: state.wishlistItems.filter((product) => product.id !== action.payload)
            }

            // return { 
            //     ...state,
            //     wishlistItems: [...state.wishlistItems, []] 
            // };

        default:
            return state
    }
}
