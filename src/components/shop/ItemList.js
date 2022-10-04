import React, { useEffect, useState } from 'react'
import { products } from './data/products'
import ItemCard from './ItemCard'

const ItemList = () => {

  const [items, setItems] = useState([])

  useEffect(() => {
    getProducts().then( response => {
      console.log( response );
      setItems( response )
    })
  }, [])
  
  const getProducts = () => {
    return new Promise( resolve => {
      setTimeout(() => {
        resolve( products )
      }, 1000);
    })
  }

  return (
    <>
       <h3 className="text-3xl font-bold">
      DISEÑOS 3D
    </h3>
    <div className='grid grid-cols-4 gap-4'>
      { items.map( i => <ItemCard key={i.id} {...i}/> ) }
    </div>
      </>
  )
}

export default ItemList