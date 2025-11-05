import NavbarBS from "./components/NavbarBS"
import ItemListContainer from "./components/ItemListContainer"
import ItemCount from "./components/ItemCount"
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {


  return (
    <>
      <NavbarBS/>
      <ItemListContainer saludo='Bienvenido a Big Burger'/>
      <ItemCount/>
    </>
  )
}

export default App
