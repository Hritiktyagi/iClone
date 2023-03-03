import React, { useState } from 'react'
import '../iphone14/iphone_14.css';
export const Iphone_14 = () => {

  const [red, setred] = useState(<img src='iphonegold.png' alt='product-preview' />)
  const [data, setData] = useState("With Goldish color")


  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="MainContainer">
            <div className="col-md-6">
              <div className="ProdeuctPreview">
                {red}
                <div>
                  {/* <div className="TimeAction">
          <p>{time}</p>
          </div>
        <div className="HeartBeatSection">
        <i className="fa-solid fa-heart-pulse"></i>
          </div>  */}
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="ProductData">
                <h1 className="ProductTitle"><i className="fa-brands fa-apple"></i> iphone 14 plus</h1>

                <p className="ProductDescription">Adventure awaits.</p>
                <p className="ProductDescription">{data}</p>
                <p className='TitlePrice'>From ₹10581.00/mo.Per Month with EMI,Footnote** or ₹89900.00Footnote‡</p>
                <p>The aerospace-grade titanium case strikes the perfect balance of weight, durability and corrosion resistance. <br />
                  The rugged Alpine Loop is made from two textile layers woven together into one continuous piece without stitching, with a titanium G-hook to ensure a secure fit.</p>
                <h3 className='SectionHead'>Select color</h3>




                {/* <img className="ProductImage" src="ultra.png" alt='green color watch' onClick={()=>{
          setred(<img src="ultra.png" alt='grey color watch'/>)
        }} />  */}


                <img className="ProductImage" src="iphonegrey.png" alt='Iphone 14' onClick={() => {
                  setData("With Grey color")
                  setred(<img src="iphonegrey.png" alt="grey_iphone14" />)
                }} />

                <img className="ProductImage" src="iphonewhite.png" alt='iphone 14' onClick={() => {
                  setData("With white color")
                  setred(<img src="iphonewhite.png" alt="white_iphone14" />)
                }} />


                <img className="ProductImage" src="iphonegold.png" alt='starlight color watch' onClick={() => {
                  setred(<img src="iphonegold.png" alt='Gold_iphone14' />)
                  setData("With Gold color")
                }} />
                {/* <img className="ProductImage" src="https://imgur.com/Mplj1YR.png" alt='red color watch' onClick={()=>{
          setred(<img src="https://imgur.com/Mplj1YR.png" alt='red color watch'/> )
         }}/> */}


                <div className="cta-links">
                  <div className="link-container"><a href="#" className="btn btn-primary" >Buy</a></div>

                  <div className="link-container"><a href="#" className="button">Learn more </a><span className="arrow-after-more">→</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
