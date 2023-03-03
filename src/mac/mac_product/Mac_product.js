import React, { useState } from 'react'
import '../mac_product/Mac_product.css';
const Mac_product = () => {

    const [red, setred] = useState(<img src='macbookair M1.png' alt='product-preview' />)
    const [data, setData] = useState("Macbook Air M1 chip" )
    const [change,setChange] = useState("From ₹17436.00/mo. Per Monthwith EMIFootnote◊◊ or ₹99900.00‡")


    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="MainContainer">
                        <div className="col-md-6">
                            <div className="ProdeuctPreview">
                                {red}
                                <div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="ProductData">
                                <h1 className="ProductTitle"> MacBook Air </h1>

                                <p className="ProductDescription">Adventure awaits.</p>
                                <p className="ProductDescription">{data}</p>
                                <p className='TitlePrice'>{change}</p>
                                <p>16‑core Neural Engine
                                    33.74 cm (13.3-inch) Retina display with True Tone
                                    Two Thunderbolt / USB 4 ports
                                    Magic Keyboard with Touch ID
                                    Force Touch trackpad
                                    30W USB-C Power Adapter</p>
                                <h3 className='SectionHead'>Select Product</h3> <br/>

      


                                <button className='btn btn-primary'><div className='ProductDescription' onClick={() => {setData("Macbook Air M1 chip")
                                  setred(<img src="macbookair M1.png" alt="Macbook Air M1"/>); setChange("From ₹17436.00/mo. Per Monthwith EMIFootnote◊◊ or ₹99900.00‡")
                                }}> MacBook Air M1 Chip</div></button>

                        <br/><br/>
                               
                                <button className='btn btn-primary'> <div className='ProductDescription' onClick={() => {setData("Macbook Air M2 chip")
                                  setred(<img src="macbookair M2.png" alt="Macbook Air M2" />); setChange("From ₹19996.00/mo. Per Monthwith EMIFootnote◊◊ or ₹14996.00‡")
                                }}> Macbook Air M2 Chip</div></button>



                                <div class="cta-links">
                                    <div class="link-container"><a href="#" class="btn btn-primary" >Buy</a></div>

                                    <div class="link-container"><a href="#" class="button">Learn more </a><span class="arrow-after-more">→</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Mac_product