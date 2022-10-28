import { collection, getDocs, getFirestore } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


export const Card = ( {id, name, price, img} ) => {
  return (
    <Link to={`/detail/${id}`}>
        <div className="grid card-normal w-80 bg-base-100 shadow-xl m-10 ">       
       <div className="card-body">
       <img src={img} />
        <h2 className="card-title">{name}</h2>
        <p>${price}</p>
        <div className="card-actions justify-end">
        <button className="btn btn-primary">Ver Producto</button>
        </div>
       </div>
      </div>
    </Link>
  )
}


const ListContainer = () => {

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getProducts()
  }, [])

  const getProducts = () => {
    const db = getFirestore()
    const productsCollection = collection(db, 'products')
    getDocs( productsCollection ).then( res => {
      const productsData = res.docs.map( d => ({id: d.id, ...d.data()}) )
      console.log( productsData );
      setProducts( productsData )
      setLoading(false)
    })
  }

  return (
    <>
    <h3 className="centerText text-3xl font-bold">
    DISEÑOS 3D
   </h3>
    <div className='grid grid-cols-4 gap-4'>
      { loading ? <h1> Cargando... </h1>
        :
        products.map( p => <Card key={p.id} {...p} /> )
      }
    </div>
    </>
  )
}

export default ListContainer