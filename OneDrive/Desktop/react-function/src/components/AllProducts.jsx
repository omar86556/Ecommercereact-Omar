import React from 'react'
import OneProduct from './OneProduct'
function AllProducts({data, pts, addToCart}) {
  console.log(data,` this is all products`)
  
  
  return (
    <div className='d-flex justify-content-center gap-3 flex-wrap'>
      {data.map((product, i)=>(<OneProduct product={product} addToCart={addToCart}/>))}
    </div>
    
  )
}

export default AllProducts
