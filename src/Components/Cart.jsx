import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../Store/cartSlice'

const Cart = () => {

  const dispatch = useDispatch()
  const products = useSelector(state => state.cart)

  const totalPrice = products.reduce((total, product) => total + product.price, 0);

  const removeBtn = (id) => {
    dispatch(remove(id))
  }

  const cards = products.map((product) => (
    <div className='pt-4'>
      <div class="bg-gray-100 rounded-md p-4 w-[600px] flex justify-between items-center">
        <img src={product.image} className='w-10 h-10 mr-4' alt="" />
        <div><p>{product.title}</p></div>
        <div><p className='ml-8 font-bold'>{`$${product.price}`}</p></div>
        <button className='ml-8' onClick={() => removeBtn(product.id)}>❌</button>
      </div>

    </div>
    
  ));  

  return (
    <>
      <h1 className="text-3xl text-center font-bold mt-8 mb-4">Cart</h1>
      <div className='flex flex-col justify-center items-center'>{cards}
        <div class=" mt-4 bg-gray-100 rounded-md p-4 w-[600px] flex justify-center items-center">
          <h1 className='font-bold'>
            Total: ${totalPrice}
          </h1>
        </div>
      </div>
      
    </>
  )
}

export default Cart