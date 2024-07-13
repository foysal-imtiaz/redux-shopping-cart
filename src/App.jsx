import Cart from "./Components/Cart";
import Navbar from "./Components/Navbar";
import Product from "./Components/Product";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes path="/" element={<Product/>}>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="*" element={<Product/>}/>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
