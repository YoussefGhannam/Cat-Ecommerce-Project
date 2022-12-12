import React from 'react'
import { connect } from 'react-redux'
import './CartIcon.css'
import {Link} from "react-router-dom"

function Carticon(props) {
    return <div>
        <Link to="/Cart">
            <span className="badge bg-white text-danger rounded-pill">{props.quantity}</span>
            <i className='fa fa-shopping-cart'></i>
        </Link>
    </div>
}
const mapStateToProps = (state) => {
    return {
    ...state.cart.item,
    quantity : state.cart.reduce((total,item) => total+parseInt(item.quantity),0)
    }
}

export default connect(mapStateToProps)(Carticon)