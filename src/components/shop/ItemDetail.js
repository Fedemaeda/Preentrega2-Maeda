import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { products } from './data/products'

const Loading = () => {
  return (
    <strong className='m-8'>loading ...</strong>
  )
}

const Item = ( {item} ) => {
  return (
     
    <div className="grid card w-96 bg-base-100 shadow-xl  ">
       
       <div className="card-body">
       <img src={item.img} />
        <h2 className="card-title">{item.name}</h2>
        <p>{item.price}</p>
        <div className="card-actions justify-end">
        <button className="btn btn-primary">Agregar al carrito</button>
        </div>
       </div>
      </div>

 
  )
}


const ItemDetail = () => {

  const { id: itemId } = useParams()
  const [loading, setloading] = useState(true)
  const [item, setItem] = useState({})

  useEffect(() => {
    getItemDetails().then( response => {
      setItem( response )
      setloading(false)
    })
  }, [])
  

  const getItemDetails = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve( products.find( p => p.id === Number(itemId) ) )
      }, 3000);
    })
  }

  return (
    <>
      
      { loading ? <Loading/> : <Item item={item}/> }
    </>
  )
}

export default ItemDetail