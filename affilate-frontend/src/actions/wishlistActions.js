import { WISHLIST_ADD_ITEM, WISHLIST_REMOVE_ITEM } from "../constants/wishlistConstants";

export const addToWishlist = (id) => async ( dispatch, getState ) => {
    // dispatch, getState
    // const { data } = await axios.get(`/api/wishlist`)

    // dispatch({
    //     type: WISHLIST_ADD_ITEM,
    //     payload: {
    //         product: data._id,
    //         name: data.name,
    //         image: data.image,
    //         rating: data.rating,
    //     }
    // })

    dispatch({
        type: WISHLIST_ADD_ITEM,
        payload: id
    })

    localStorage.setItem('wishlistItems', JSON.stringify(getState().wishlist.wishlistItems))

    // return {
    //     type:'WISHLIST_ADD_ITEM',
    //     payload: id
    // }
}

export const removeFromWishlist = (id) => ( dispatch, getState ) => {
    dispatch({
        type: WISHLIST_REMOVE_ITEM,
        payload: id
    })

    localStorage.setItem('wishlistItems', JSON.stringify(getState().wishlist.wishlistItems))

    // return {
    //     type:'WISHLIST_REMOVE_ITEM',
    //     payload: id
    // }
}
