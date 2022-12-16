import React from 'react'
import ProductList from './Cards/ProductList'
import Sidebar from "./Sidebar"

function Products() {
  return (
    <>
    <p style={{marginLeft:"10px"}}>Medical Darpan - search - Fabiflu Tablet</p>
    <div className="filter-search">

    <form onSubmit={(e)=> e.preventDefault()}>
      <input type="text" name="text" placeholder="Paracetamol" className="search-box"></input>
      <button className="search-btn">search</button>
    </form>
    <div>
  
    </div>
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