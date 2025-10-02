import React from 'react'
import { IProduct } from '../models/IAllProducts'
import { NavLink } from 'react-router-dom'

function ProductItem(props: {item: IProduct}) {
  return (
    <div className="card">
        <img src={props.item.images[0]} className="card-img-top" />
        <div className="card-body">
            <h5 className="card-title" style={{height: 60,}}>{props.item.title}</h5>
            <p className="card-text">{props.item.price}₺</p>
            <NavLink to={'/productDetail/'+props.item.id} className="btn btn-primary">Detail</NavLink>
        </div>
    </div>
  )
}

export default ProductItem