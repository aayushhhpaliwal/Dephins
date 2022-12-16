import React from 'react'
import Related from './Categories/Related'
import RelatedBrand from './Categories/RelatedBrand'
import BusinessType from './Categories/BusinessType'
import Strength from './Categories/Strength'
import Manufactures from './Categories/Manufactures'
import Prescription from './Categories/Prescription'

function Sidebar() {
  return (
    <div className='SideMain'> 
    <div className='content1'><Related /></div>
     <div className='content'><RelatedBrand /></div>
     <div className='content'><BusinessType /></div> 
     <div className='content'> <Strength /> </div> 
     <div className='content'> <Manufactures/> </div> 
     <div className='content'> <Prescription /> </div> 
    </div>
  )
}

export default Sidebar