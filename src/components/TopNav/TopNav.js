
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import  './_top-nav.scss'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
//import {GoogleLogin} from "react-google-login"
//import {gapi} from 'gapi-script';
const TopNav = function()
{


  const successHandler=(res)=>{

    console.log(res);
  }
  const cartItemCount= useSelector(state=>state.cartReducer.totalItems);
//console.log("count",cartItemCount);
    return(
        <div className='header bg-dark'>
        <div className='d-flex justify-content-between'>
          <div className='brand my-1'>
            <h1 class='logo'> Coforge Rewards Shop </h1>
          </div>

          <div className='cart-wishlist'>
            <ul className="p-0">
 
           
           <li className="list-icon" > <Link to="/cart" className='d-flex'> <FontAwesomeIcon icon="fa fa-shopping-cart" style={{color:"white"}}/>{cartItemCount>0 && <div className='cart-item-count'><p>{cartItemCount}</p></div>}</Link> </li>
         
            </ul>

          </div>
        
        </div>
      </div>

    )




}

export default TopNav;
