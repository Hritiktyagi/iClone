import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export const Iphone = () => {
  const navigate = useNavigate();
  function handleClick() {
    navigate('/iphone14')
  }

  const _useNavigate = useNavigate();
  useEffect(() => {

    if (localStorage.getItem("user_key")) {
      // console.log("if part")
    }
    else {
      _useNavigate("/login")
    }
  }, [])
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="typography-body">
              <label className='section-content-label'>New</label>
              <h1 className='product-headline'>iphone 14</h1>
              <p className='product-price'>Bigger and bigger</p>
              <div className='cta-links'>
                <div className="link-container">
                  <a href='#' className='btn btn-primary' onClick={handleClick}>Buy</a>
                </div>
                <div className="link-container">
                  <a href='#' className='button'>Learn more </a><span className='arrow-after-more'>&rarr;</span>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="image-wrapper">
                <figure className='macbook-air-image'>
                  <img src='capture.png' alt='iphone14' className='capture_img_responsive'></img>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 p-0">
            <div className="section-content-macbook-pro">
              <div className="typography-body body-margin-man">
                <div className="section-content-label">New</div>
                <h1 className='product-headline'>iphone14 Pro</h1>
                <p className='product-price'>From ₹129900.00*</p>
                <div className='cta-links'>
                  <div className="link-container">
                    <a href='#' className='btn btn-primary'>Buy</a>
                  </div>
                  <div className="link-container">
                    <a href='#' className='button'>Learn more </a><span className='arrow-after-more'>&rarr;</span>
                  </div>
                </div>
              </div>
              <div className="image-wrapper">
                <figure className='iphone14_pro_image'>
                  <img src='iphone_pro.png' alt='iphone14 pro'></img>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  )
}
