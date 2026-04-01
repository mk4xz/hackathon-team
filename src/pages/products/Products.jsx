import './Products.css'
import { CiHome } from "react-icons/ci";
import { TbLabel } from "react-icons/tb";
import { FaRegFolder } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
{/* <FaRegFolder /> */ }
{/* <TbLabel /> */ }
{/* <CiHome /> */ }
// let navigate = useNavigate()

const Products = () => {
    return (
        <>
            <div className="products">
                <div className="Products1">
                    {/* Side bar */}
                </div>
                <div className="Products2">
                    <div className="products3">
                        <h1>Product</h1><a href='/addproduct'><FaPlus style={{ color: "white" }} />Add</a>
                    </div>
                    <div className="products4">
                      <div className="product_header">
                        <header>
                          <nav>
                            <ul>
                              <li><a href="">Product</a></li>
                              <li><a href="">Inventory</a></li>
                              <li><a href="">Color</a></li>
                              <li><a href="">Price</a></li>
                              <li><a href="">Rating</a></li>
                            </ul>
                            <hr />
                          </nav>
                        </header>
                      </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Products