import ProductsActionType from "../actionTypes/ProductsActionType";

const {FETCH_REQUEST,FETCH_SUCCESS,FETCH_FAILURE} = ProductsActionType;

const initialState = {
    loader: false,
    products: [],
    error: "",
}

const ProductsReducer = (state=initialState, action) => {
    switch(action.type) {
        case FETCH_REQUEST:
            return { ...state, loader: true}
        case FETCH_SUCCESS:
            return { ...state, loader: false, products:action.payload}
        case FETCH_FAILURE:
            return { ...state, loader: false,  error:action.payload }
        default:
            return state
    }
}

export default ProductsReducer;