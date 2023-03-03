import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';


import '../watch/Watch.css';



export const Watch = () => {
  const _useNavigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("user_key")) {
      // console.log("if part")
    }
    else {
      _useNavigate("/login")
    }
  }, [])

  const navigate = useNavigate();
  function handleClick() {
    navigate('/product_data')
  }

  return (
    <>
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-md-12">
            <div className="Watch_logo">
              <h1><i class="fa-brands fa-apple"></i> Watch <span className="WatchName">Ultra</span></h1>
              <p className="Watch_Description">Adventure awaits.</p>
              <p className='Para_man'>Meet the most rugged and capable Apple Watch ever. With a robust titanium case, precision dual-frequency GPS, up to 36 hours of battery life,1 the freedom of cellular2 and three specialised straps made for athletes and adventurers of all kinds.</p>
              <div class="cta-links">
                <div class="link-container"><a href="#" class="btn btn-primary" onClick={handleClick} >Buy</a></div>

                <div class="link-container"><a href="#" class="button">Learn more </a><span class="arrow-after-more">→</span></div>
              </div>
              <img className='Img_man' src='https://www.apple.com/in/apple-watch-ultra/images/overview/hero/hero_watch_ultra__cbu8ymf4a8xe_large.jpg' alt='watch_ultra.png' />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
