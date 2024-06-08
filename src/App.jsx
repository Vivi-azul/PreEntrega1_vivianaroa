import './App.css'
import Navbar from "./components/NavBar/NavBar"
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
  

  return (
    <div>
      <Navbar/>
      <ItemListContainer saludo="Bienvenido a Patitas" />
    </div>
  )
}

export default App
