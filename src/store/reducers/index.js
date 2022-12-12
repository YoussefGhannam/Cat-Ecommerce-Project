
import { ADD_TO_CART } from "../actions/addtocartTYPE";
import { Remove_From_Cart } from "../actions/deleteTYPE";
import {Clear_Cart} from '../actions/Clear_CartTYPE'

export default function  cartReducer(state,action)  {
    switch(action.type) {
        case ADD_TO_CART:
            return [
                    ...state,
                    {
                        product : action.productInfo,
                        quantity : action.quantity     
                    }    
                
                    
                ]
            
        
        case Remove_From_Cart: {
            const index = action.index
            const newState = [...state]
            newState.splice(index,1)
            return newState;
            }
        case Clear_Cart: {
            let newState = [...state]
            newState = []
            return newState
        }
        default:
            if (state === undefined) {
                return []
            }
            return state
    }

}




