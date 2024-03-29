import React from 'react'
import SideNav from '../SideNav'
import Products from '../ProductsComponent/ProductsComponent';
import {useState} from 'react';
function MainComponent() {

  const [sortKey, setSortKey] = useState('');


  return (
    <div className='container-fluid'>
  
  <div className='row'>
      <div className='col-lg-3 col-md-4 col-sm-5'>
    <SideNav setSortKey={setSortKey} />
    </div>
    <div className='col-lg-9 col-md-8 col-sm-7'>
    <Products sortKey={sortKey} />
    </div>


    </div>
    </div>

  )
}

export default MainComponent