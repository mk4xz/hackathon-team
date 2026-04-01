import './Categories.css'

import bitmap from '../../assets/Bitmap.png'
import image1 from '../../assets/image (1).png'
import image3 from '../../assets/image (3).png'
import image4 from '../../assets/image (4).png'
import image5 from '../../assets/image (5).png'
import image6 from '../../assets/image (6).png'
const Categories = () => {
  return (
    <div>
      <div className='boss'>
        <h2 className='title'>Categories</h2>
        <button className='btn'>+ add  Categories</button>
        <div className='row1'>
        <div className='img1'>
<img src={bitmap} alt="" />
    <h1>Men clothes</h1>
    <p>24 items</p>
        </div>
        <div className='img2'>
<img src={image1} alt="" />
    <h1>Women clothes</h1>
    <p>12item</p>
        </div>
        <div className='img3'>
<img src={image6} alt="" />
    <h1>Accesiors</h1>
    <p>43 item</p>
        </div>
        </div>
        <div className='row2'>
<div className='img4'>
<img src={image4} alt="" />
    <h1>Cotton clothes</h1>
    <p>31 items</p>
        </div>
        <div className='img5'>
<img src={image5} alt="" />
    <h1>Summer clothes</h1>
    <p>26items</p>
        </div>
        <div className='img6'>
<img src={image3} alt="" />
    <h1>wedding clothes</h1>
    <p>52 items</p>
        </div>
        </div>
        <div className='row3 '>
<div className='img7'>
<img src={image4} alt="" />
    <h1>spring collection</h1>
    <p>24 items</p>
        </div>
        <div className='img8'>
<img src={image3} alt="" />
    <h1>Casual clothes</h1>
    <p>52 items</p>
        </div>
        <div className='img9'>
<img src={image6} alt="" />
    <h1>hats</h1>
    <p>26 items</p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Categories
