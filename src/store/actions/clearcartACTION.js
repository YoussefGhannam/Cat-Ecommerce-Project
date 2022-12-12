import { Clear_Cart } from "./Clear_CartTYPE";

export  function CreateClearCart()  {
    return {
        type : Clear_Cart,
        
    }
}
export function ClearCart() {
    return (dispatch) => {
        dispatch(CreateClearCart())
    }
}
