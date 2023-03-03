import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export const Ipad = () => {
  const _useNavigate = useNavigate();
  useEffect(()=>{
    if(localStorage.getItem("user_key"))
    {
      // console.log("if part")
    }
    else
    {
      _useNavigate("/login")
    }
  },[])


  const navigate = useNavigate();
  function handleClick(){
    navigate('/ipad_product')
  }
 

  return (
  <>
   <div className="container">
   <div className="ipad-man">
    <div className="row">
    <div className="Manage">
      <div className="col-md-6">
       <div className='Img_Man'>
        <img src='ipad_product.png' style={{width:"100%"}} alt='ipad pic'/>
        </div>
      </div>
      <div className="col-md-6">
      <label className='section-content-label'>New</label>
        <h1 className='product-headline'>iPad</h1>
        <p className='product_para'>Lovable. Drawable. <br/> Magical</p>
        <p className='product-price'>From ₹49,999*</p>
        <div className="cta-links">
        <div className="link-container"><a href="#" className="btn btn-primary" onClick={handleClick}>Buy</a></div>
       
        <div className="link-container"><a href="#" className="button">Learn more </a><span className="arrow-after-more">→</span></div>
        </div>
      </div>
    </div>
    </div>
    </div>
  </div>


<div className="container-fluid ">
<div className="typograpy-body">
  <div className="row">
    <div className="col-md-12">
      <div className="section-content-macbook-pro p-5 ">
      
      <label className='section-content-label'>New</label>
          <h1 className='product-headline'>iPad Pro</h1>
          <p className='product_para'>Supercharged by <img src='https://www.apple.com/v/ipad/home/cc/images/overview/hero/m2_chip__buj2soxeo91e_large.png'/></p>
          <p className='product-price'> From  ₹81,900</p>
          <div className="cta-links">
        <div className="link-container"><a href="" className="btn btn-primary">Buy</a></div>
       
        <div className="link-container"><a href="" className="button">Learn more </a><span className="arrow-after-more">→</span></div>
        </div>
          </div>
      </div>
      
      <img src='https://www.apple.com/in/ipad-pro/images/overview/hero/hero_combo__fcqcc3hbzjyy_large.jpg' alt='Ipad pro'/>
      </div>
      </div>
   </div>


  
  </>
  )
}
