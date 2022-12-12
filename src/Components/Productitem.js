import React from 'react'

function Productsitem(props) {
    return (
      <div className="card" style={{width: "18rem",marginTop:"13px",marginLeft:"15px"}}>

        <img src={props.product.image} className="card-img-top" alt="cat"/> 
        
        <div className="card-body">
          <h5 className="card-title">{props.product.title}</h5>
          <p className="card-text">Price : {props.product.price}$</p>
          <a href={"/Products/" + props.product.id} className="btn btn-primary">Details</a>

        </div>

      </div>
        )

}


export default Productsitem