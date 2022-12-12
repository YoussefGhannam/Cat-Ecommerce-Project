import {ADD_TO_CART} from './addtocartTYPE'

export  function CreateaddToCart(productInfo,quantity)  {
    return {
        type : ADD_TO_CART,
        productInfo,
        quantity
    }
}
export function addToCart(productInfo,quantity) {
    return (dispatch) => {
        dispatch(CreateaddToCart(productInfo,quantity))
    }
}
