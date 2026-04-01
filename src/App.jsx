import { Route, Routes } from 'react-router-dom'
import './App.css'
import Products from './components/Products'
import Header from './components/Header'

const App = () => {
  return (
    <>
    <Header/>
      <Routes>
        <Route path='/'element={<Products/>}/>
        {/* <Route /> */}
        {/* <Route/> */}
      </Routes>
    </>
  )
}

export default App
