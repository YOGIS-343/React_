import React from 'react'

const Singleproducts = ({product}) => {
    const {title,description,thumbnail} = product
  return (
    <div className="card" style={{"width": "18rem"}}>
  <img src={thumbnail} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a href="#" className="btn btn-primary">Add cart</a>
  </div>
</div>
  )
}

export default Singleproducts