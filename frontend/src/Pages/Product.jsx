import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import BreadCrumbs from '../Components/Breadcrumbs/BreadCrumbs'

const Product = () => {
  const {all_products} = useContext(ShopContext)
  const {productId} = useParams();
  const product = all_products.find((e)=> e.id===Number(productId))
  return (
    <div>
      <BreadCrumbs product={product} />
    </div>
  )
}

export default Product
