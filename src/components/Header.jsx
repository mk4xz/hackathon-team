import './Header.css'
import girl from '../assets/girl.png'
import logo from '../assets/logo.png'
import { GoSearch } from "react-icons/go";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <div className="Header">
        <div className="headers">
          <img src={logo}/>
          <h1>Modernize</h1>
            <input type="text"placeholder='🔍Search...'/>
        </div>
        <div className="headers">
          <img src={girl}/>
          <p>X’eriya Ponald</p>
        </div>
      </div>
    </>
  )
}

export default Header
