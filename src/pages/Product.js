import React from 'react'
import withRouter from './withRouter'
import {getById} from '../api/product'
import {connect} from 'react-redux'
import './Product.css'
import {addToCart} from '../store/actions/addtocartACTION'

class Product extends React.Component {
    state = {
        quantity : 0,
        product: {}
    }
    handlevalue = (event) => {
        this.setState({quantity : event.target.value})
    }
    componentDidMount() {
        const id = this.props.params.id
        getById(parseInt(id)) 
        .then(product =>
            this.setState({product}))
    }
    addToCart = () => {
        return this.props.addToCart(this.state.product,this.state.quantity)
    }
    render() {
        const total = parseInt(this.state.quantity * parseInt(this.state.product.price))
        return (
            <>
    <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-6 size card rounded ">
                <img src={this.state.product.image} width="100%" height="" style={{marginTop:"2px"}} alt="img"/><br></br>
                <div className="card-body">
                <p>Price : {this.state.product.price}$</p>
                <p>{this.state.product.Description}</p><br></br>
                <input type="number" max="30" min="1" style={{width:"150px"}} value={this.state.quantity} onChange={this.handlevalue} /><br></br>
                <p>Total : {total}$ </p>
                <button className='btn btn-primary' onClick={this.addToCart} >Add To Cart</button>
                </div>
            
        </div>
    </div>
            </>

            )
    }
    
}

export default connect(null ,{addToCart})(withRouter(Product))
