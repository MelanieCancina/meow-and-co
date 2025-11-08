import ItemListContainer from "./components/item-list-container";
import ItemDetailContainer from "./components/item-detail-container";
import Navbar from "./components/nav-bar";
import { BrowserRouter, Routes, Route } from "react-router";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/item/:id' element={<ItemDetailContainer />} /> {/* ← cambio */}
        <Route path='/category/:Name' element={<ItemListContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

