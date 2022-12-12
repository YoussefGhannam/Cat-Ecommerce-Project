import React from 'react'
import {All} from '../api/product'
import Productitem from '../Components/Productitem'
class Products extends React.Component {
    state = {
        products : []
    }
    componentDidMount() {
        All().then(data => {
            this.setState({products : data})
        })
    }
    render() {
        return (
        <div className="row">
            {this.state.products.map(product =>
            <div className="col-lg-4 col-md-4 col-sm-6" key={product.id}>
            <Productitem product={product}/>
            </div>
            )}
            
            
        </div>
        )
    }
}


export default Products