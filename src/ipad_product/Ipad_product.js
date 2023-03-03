import React from 'react'
import '../ipad_product/Ipad_product.css';
const Ipad_product = () => {
  return (

    <div className="container-fluid">
      <div className="row">
        <div className="MainContainer">
          <div className="col-md-6">
            <div className="ProdeuctPreview">
              <img src='ipad_product.png' alt='ipad pro' />
            </div>
          </div>
          <div className="col-md-6">
            <div className="ProductData">
              <h1 className="ProductTitle"> Buy iPad Pro</h1>
              <br />
              <p className="ProductDescription">10th generation.</p>
              {/* <p className="ProductDescription">iPad pro</p> */}
              <p className='TitlePrice'>From ₹7483.00/mo.Per Month with No Cost EMI with selected banksFootnote§ or ₹44900.00Footnote‡</p>
              {/* <h3 className='SectionHead'>Select color</h3>     */}
              <div className="cta-links">
                <div className="link-container"><a href=" " className="btn btn-primary" >Buy</a></div>

                <div className="link-container"><a href=" " className="button">Learn more </a><span className="arrow-after-more">→</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Ipad_product