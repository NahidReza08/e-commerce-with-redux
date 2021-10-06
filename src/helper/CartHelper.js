export const getQuantity = (product,cartProducts) => {
    const index = cartProducts.findIndex((cartProduct) => cartProduct.id===product.id);
    if(index===-1) return 0;
    return cartProducts[index].quantity;
}

export const getTotalItems = (cartProducts) => {
    if(cartProducts.length===0) return 0;
    return cartProducts.reduce((count, product)=>count+product.quantity,0);
}

export const getTotalAmount = (cartProducts) => {
    if(cartProducts.length===0) return 0;
    return cartProducts.reduce((count, product)=>count+product.price*product.quantity,0);
}
