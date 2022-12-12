import React from 'react'
import {connect} from 'react-redux'
import RemoveFromCart from '../store/actions/deleteACTION'


class Cartitem extends React.Component {
render() {
return (
    <>
      <div className="card" style={{width: "18rem",marginTop:"13px",marginLeft:"15px"}}>
          <img src={this.props.item.product.image} className="card-img-top" alt="cat"/> 
        <div className="card-body">
            <h5 className="card-title">{this.props.item.product.title}</h5>
            <p className="card-text">Price : {this.props.item.product.price}$</p>
            <p>Quantity :{this.props.item.quantity}</p>
            <p>Total : {this.props.item.product.price * this.props.item.quantity}$</p>
            <button onClick={() => this.props.RemoveFromCart(this.props.index)}  className="btn btn-danger">
            <i className='fa fa-trash'></i>
            Delete
            </button>
        </div>
      </div>
    </>
  )
}
}



export default connect(null,{RemoveFromCart})(Cartitem)
