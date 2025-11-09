import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from "./components/ItemListContainer";
import NavbarBS from "./components/NavbarBS";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from './components/Error';



function App() {

  return (
    <BrowserRouter>
      <NavbarBS/>
      <Routes>
        <Route path='/' element={<ItemListContainer saludo='Bienvenido a Big Burger'/>}/>
        <Route path='/category/:type' element={<ItemListContainer saludo='Bienvenido a la categoria: '/>}/>
        <Route path='/item/:id' element={<ItemDetailContainer/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
