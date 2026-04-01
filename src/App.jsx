import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Products from './pages/products/Products'
import Addproduct from './components/Addproduct'

const App = () => {
  return (
    <>
    <Header/>
      <Routes>
        <Route path='/'element={<Products/>}/>
        <Route path='/addproduct' element={<Addproduct/>}/>
        {/* <Route/> */}
      </Routes>
    </>
  )
}

export default App
