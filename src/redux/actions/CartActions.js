import CartActionType from "../actionTypes/CartActionType";

const {SHOW_CART,HIDE_CART,ADD_PRODUCT,REMOVE_PRODUCT,REMOVE_ALL,CHANGE_QUANTITY,FILTER_CART} = CartActionType;

export const showCart = () => ({
    type:SHOW_CART
})

export const hideCart = () => ({
    type:HIDE_CART
})

export const addProduct = (product) => ({
    type:ADD_PRODUCT,
    payload: product
})

export const removeProduct = (product) => ({
    type:REMOVE_PRODUCT,
    payload: product
})

export const removeAll = () => ({
    type:REMOVE_ALL,
})

export const changeQuantity = (product) => ({
    type:CHANGE_QUANTITY,
    payload: product
})

export const filterCart = () => ({
    type:FILTER_CART,
})
