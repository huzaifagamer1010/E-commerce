import React from 'react'
import './RelatedProducts.css'
import data_product from '../Assets/Frontend_Assets/data'

const RelatedProducts = () => {
  return (
    <div className='relatedproducts'>
        <h1>Related Products</h1>
        <hr />
        <div className="relatedproducts-item">
        {data_product.map}
        </div>
    </div>
  )
}

export default RelatedProducts