import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { add } from "../Store/cartSlice"

const Product = () => {

  const dispatch = useDispatch();
  const [products, getProducts] = useState([]);

  useEffect(() => {
    // API Call
    fetch("https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((result) => getProducts(result));
  }, [])

  const addToCart = (product) => {
    dispatch(add(product))
  }

  const cards = products.map((product) => (
    <div key={product.id} className="relative flex flex-col text-gray-700 bg-gray-100 shadow-md bg-clip-border rounded-xl w-[320px] h-[440px] m-6 mt-10">
      <div className="flex justify-center items-center relative mx-4 mt-4 overflow-hidden text-gray-700 bg-gray-100 bg-clip-border rounded-xl h-96">
        <img
          src={product.image}
          style={{ width: "130px", height: "180px"}}
          alt="card-image"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="p-6">
        <div className="mb-2">
          <p className="text-center block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
            {product.title}
          </p>
        </div>
        <p className="text-center block font-sans text-base antialiased font-bold leading-relaxed text-blue-gray-900">
          {`$${product.price}`}
        </p>
      </div>
      <div className="p-6 pt-0">
        <button
          className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] active:opacity-[0.85] active:shadow-none block w-full bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100 bg-gray-800 text-white"
          type="button"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  ))

  return (
    <>
      <h1 className="text-3xl text-center font-bold mt-8 mb-4">Product Dashboard</h1>
      <div className="flex flex-wrap items-center justify-center mb-20">{cards}</div>

    </>
  )
}

export default Product