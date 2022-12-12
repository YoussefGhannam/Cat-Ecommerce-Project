import { Remove_From_Cart } from "./deleteTYPE";

export default function CreateRemoveFromCart(index)  {
    return {
        type : Remove_From_Cart,
        index,
    }
}
export  function RemoveFromCart(index) {
    return (dispatch) => {
        return dispatch(CreateRemoveFromCart(index))
    }
}
