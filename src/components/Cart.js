
import React from 'react'
import { useCart } from '../context/cartContext'

const Cart = () => {

  const {products, clearCart} = useCart()

  return (
    <div className="centerText">
        <div className=" text-3xl font-bold">CARRITO DE COMPRAS</div>
        { products.map( (p, i) => <li key={i}>{p.name}: ${p.price}</li> ) }
        <button className="btn btn-primary" onClick={clearCart}>VACIAR CARRITO</button>
    </div>
  )
}

export default Cart