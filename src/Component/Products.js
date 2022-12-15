import React from 'react'
import ProductList from './Cards/ProductList'
import ProductGrid from "./ProductGrid"
import Sidebar from "./Sidebar"

function Products() {
  return (
    <>
    <div className="filter-search">
    <form onSubmit={(e)=> e.preventDefault()}>
      <input type="text" name="text" placeholder="Paracetamol" className="search-box"></input>
      <button className="search-btn">search</button>
    </form>
     </div>
    <div className='ProductMain'>
        <div className='SideBar'>
           <Sidebar />
        </div>
        <div className='ProductSide'>
            <ProductList />
        </div>
   </div>
   </>
  )
}

export default Products