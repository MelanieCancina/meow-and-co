import ItemListContainer from "./components/item-list-container";
import ItemDetailContainer from "./components/item-detail-container";
import Navbar from "./components/nav-bar";
import { BrowserRouter, Routes, Route } from "react-router";
import CartContainer from "./components/cart-container";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Checkout from "./components/checkout";
import "./App.css";
import OrderSuccess from "./components/OrderSuccess";
import NotFound from "./components/NotFound"


function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/item/:id' element={<ItemDetailContainer />} />
        <Route path="/category/:slug" element={<ItemListContainer />} />
        <Route path='/cart' element={<CartContainer />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order/:id" element={<OrderSuccess />} />
        <Route path="*" element={<NotFound />} />

      </Routes>

      <ToastContainer
        limit={1}
        autoClose={1000}
        pauseOnHover={false}/>
    </BrowserRouter>
  );
}

export default App;

