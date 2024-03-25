import React from 'react'
import SideNav from '../SideNav'
import Products from '../ProductsComponent/ProductsComponent'
function MainComponent() {
  return (
    <div className='container-fluid'>
  
  <div className='row'>
      <div className='col-lg-3 col-md-4 col-sm-5'>
    <SideNav />
    </div>
    <div className='col-lg-9 col-md-8 col-sm-7'>
    <Products />
    </div>


    </div>
    </div>

  )
}

export default MainComponent