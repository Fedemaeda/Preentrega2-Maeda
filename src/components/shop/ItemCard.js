import React from 'react'
import { Link } from 'react-router-dom'


const ItemCard = ( {id, img, name, price} ) => {
  return (
    <Link to={`/shop/item/${id}`}>
      
      
      <div className="grid card w-96 bg-base-100 shadow-xl  ">
       
       <div className="card-body">
       <img src={img} />
        <h2 className="card-title">{name}</h2>
        <p>{price}</p>
        <div className="card-actions justify-end">
        <button className="btn btn-primary">Ver Producto</button>
        </div>
       </div>
      </div>
      
    </Link>
  )
}

export default ItemCard