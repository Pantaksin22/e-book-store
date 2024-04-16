import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

function Header() {
  return (
    <div className='header'>
      <img className='header_logo' src='https://upload.wikimedia.org/wikipedia/commons/d/de/Amazon_icon.png'></img>

      <div className='header_search'>
        <input className='header_searchInput' type='text'/>
        <SearchIcon className='header_searchIcon'/>
        </div>
      <div className='header_nav'>
      <Link to={!user && 'login'}>
      <div onclick={handleAuthentication} classname="header__option">
                  <span className='header_optionLineOne'>Hello {!user ? 'Guest' : user.email}</span>
            <span className='header_optionLineTwo'>{user ? 'Sign out' : 'Sign in'} </span>
        </div>
        </Link>
        <div className='header_option'>
            <span className='header_optionLineOne'>Return</span>
            <span className='header_optionLineTwo'>& Orders</span>           
        </div>

        <div className='header_option'>
            <span className='header_optionLineOne'>Your</span>
            <span className='header_optionLineTwo'>Prime</span>
        </div>
        <Link to="/checkout">
        <div className='header_optionBasket'>
            <ShoppingBasketIcon/>
            <span className='header_optionLineTwo header_basketCount'>
              {basket?.lenght}
            </span>
        </div>

        </Link>
        

      </div>      
    </div>
  )
}

export default Header