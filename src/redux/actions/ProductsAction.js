import ProductsActionType from "../actionTypes/ProductsActionType";

const {FETCH_REQUEST,FETCH_SUCCESS,FETCH_FAILURE} = ProductsActionType;

export const fetchRequest = () => ({
    type:FETCH_REQUEST
})

export const fetchSuccess = (products) => ({
    type:FETCH_SUCCESS,
    payload:products
})

export const fetchFailure = (error) => ({
    type:FETCH_FAILURE,
    payload:error
})

