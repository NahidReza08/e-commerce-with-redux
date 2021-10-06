import CartActionType from "../actionTypes/CartActionType";

const {SHOW_CART,HIDE_CART,ADD_PRODUCT,REMOVE_PRODUCT,REMOVE_ALL,CHANGE_QUANTITY,FILTER_CART} = CartActionType;

const initialState = {
    cartIndex: "z-0",
    cartProducts: [],
}

const CartReducer = (state=initialState, action) => {
    const {cartProducts,totalQuantity} = state;
    switch(action.type) {
        case SHOW_CART:
            return { ...state, cartIndex: "z-30",}
        case HIDE_CART:
            return { ...state, cartIndex: "z-0" }
        case ADD_PRODUCT:
            return { ...state, cartProducts:[...cartProducts,action.payload]}
        case REMOVE_PRODUCT:
            return { ...state, cartProducts:cartProducts.filter(product=>product.id!==action.payload.id)}
        case REMOVE_ALL:
            return { ...state, cartProducts:[]}
        case CHANGE_QUANTITY:
            return {...state,cartProducts:cartProducts.map(product=>(product.id===action.payload.id)?action.payload:product)}
        case FILTER_CART:
            return {...state, cartProducts: cartProducts.filter(product=>product.quantity>0) }
        default:
            return state
    }
}

export default CartReducer;