import React from 'react'
import {ClearCart} from '../store/actions/clearcartACTION'
import {connect} from 'react-redux'
import Cartitem from '../Components/Cartitem'
class Cart extends React.Component {
    render() {
        return (
        <div className="row">
            {this.props.Cartitem.map((item,index) =>
            <div className="col-lg-4 col-md-4 col-sm-6" key={index}>
            <Cartitem item={item} index={index}/>
            </div>
            )}
            <p>Total : {this.props.total}$</p>
            <div className="container"><button onClick={this.props.ClearCart} className='btn btn-info w-75' style={{display:'block',margin:'auto'}}>Purchase</button></div>
            
        </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        Cartitem : state.cart,
        total : state.cart.reduce((total , item ) => total + (item.quantity * item.product.price),0)
    }
}


    export default connect(mapStateToProps,{ClearCart})(Cart)