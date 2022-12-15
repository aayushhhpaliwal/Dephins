import React from 'react'

import ProductGrid from "./ProductGrid"
import Sidebar from "./Sidebar"

function Products() {
  return (
    <div className='ProductMain'>
        <div>
        Hello
           <Sidebar />
        </div>
        <div>
            <ProductGrid />
        </div>
   </div>
  )
}

export default Products