import { collection, doc, getDoc, getFirestore } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useCart } from '../context/cartContext'

const ItemDetail = () => {
  
  const { id } = useParams()

  const [product, setProduct] = useState({})
  const {addToCart} = useCart()

  useEffect(() => {
    getProduct()
  }, [])

  const getProduct = () => {
    const db = getFirestore()
    const productsCollection = collection(db, 'products')
    const docRef = doc( productsCollection, id)
    getDoc( docRef ).then( res => {
        console.log( res.data() );
        setProduct(res.data())
    })
  }

  const addHandler = () => {
    addToCart(product)
  }

  return (
    // <div>       
    //     <div>{product.name}</div>
    //     <div>${product.price}</div>
    //     <div>{product.description}</div>
    //     <img src={product.img}/>
        
    // </div>
    <div className="grid card-normal w-80 bg-base-100 shadow-xl m-10 ">       
    <div className="card-body">
    <img src={product.img} />
     <h2 className="card-title">{product.name}</h2>
     <p>${product.price}</p>
     <h3>{product.description}</h3>
     <div className="card-actions justify-end">
     <button className="btn btn-primary" onClick={addHandler}>Agregar al carrito</button>
     </div>
    </div>
   </div>
  )
}

export default ItemDetail