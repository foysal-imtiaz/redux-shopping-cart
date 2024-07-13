import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import cartIcon from '../assets/cart-icon.png'

const Navbar = () => {

  const cartProducts = useSelector(state => state.cart)

  return (
    <>
      <div className='flex justify-between mx-10 mt-3'>
        <h1><Link to="/" className='font-semibold text-xl'>HOME</Link></h1>

        <div className='w-8'>
            <Link to="/cart" className='flex'>
              
              <img src={cartIcon} alt="icon" className=" relative "/>
              <span className=' font-bold'>{cartProducts.length}</span>
          
            </Link>
        </div>

      </div>
    </>
  )
}

export default Navbar