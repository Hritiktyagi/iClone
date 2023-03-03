import React, { useState } from 'react'
import './Macbook_pro_product.css';
const Macbook_pro_product = () => {

    const [red, setred] = useState(<img src='macbookair M1.png' alt='product-preview' />)
    const [data, setData] = useState("Macbook Air M1 chip")
    const [change,setChange] = useState(" ₹99900.00‡")
    const [mac,setMac] = useState(<img src='macbook_pro.png' alt='macbook_pro'/>)
    const [rate,setRate] = useState ("MacBook Pro M2 chip");
    const [map,setMap] = useState("₹199900.00‡")

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
                            <div className="ProductData"> <br/><br/>
                                {/* <h1 className="ProductTitle"> MacBook Pro 13” M1 chip </h1> <br/><br/> */}

                              
                                <p className="ProductDescription">{data}</p>
                                <p className='TitlePrice'>{change}  </p>
                                <p>16‑core Neural Engine
                                    33.74 cm (13.3-inch) Retina display with True Tone
                                    Two Thunderbolt / USB 4 ports
                                    Magic Keyboard with Touch ID
                                    Force Touch trackpad
                                    30W USB-C Power Adapter</p> <br/><br/>
                                <h3 className='SectionHead'>Select Product</h3> <br />




                                <button className='btn btn-primary'><div className='ProductDescription' onClick={() => {
                                    setData("Macbook Air M1 chip")
                                    setred(<img src="macbookair M1.png" alt="Macbook Air M1" />);
                                    setChange(" ₹99900.00‡")
                                }}> MacBook Air M1 Chip</div></button>

                                <br /><br />

                                <button className='btn btn-primary'> <div className='ProductDescription' onClick={() => {
                                    setData("Macbook Air M2 chip")
                                    setred(<img src="macbookair M2.png" alt="Macbook Air M2" />);
                                     setChange(" ₹190000.00‡")
                                }}> Macbook Air M2 Chip</div></button>



                                <div class="cta-links">
                                    <div class="link-container"><a href="#" class="btn btn-primary" >Buy</a></div>

                                    <div class="link-container"><a href="#" class="button">Learn more </a><span class="arrow-after-more">→</span></div>
                                </div>
                            </div>
                        </div>
                        
                      
                        <div className="col-md-6">
                            <div className="ProdeuctPreview">
                                {mac}
                                <div>
                                </div>
                            </div>
                            <div className="ProductData"> <br/> <br/>
                                {/* <h1 className="ProductTitle"> MacBook Pro 14”  and 16”  </h1> <br/><br/> */}

                                {/* <p className="ProductDescription">MacBook Pro 14”  and 16” M1 chip </p> */}
                                <label className='section-content-label'>New</label>
                                <p className="ProductDescription">{rate}</p>
                                <p className='TitlePrice'>{map}
                                </p>
                                <p>16‑core Neural Engine
                                    33.74 cm (13.3-inch) Retina display with True Tone
                                    Two Thunderbolt / USB 4 ports
                                    Magic Keyboard with Touch ID
                                    Force Touch trackpad
                                    30W USB-C Power Adapter</p> <br/><br/>
                                <h3 className='SectionHead'>Select Product</h3> <br />




                                <button className='btn btn-primary'><div className='ProductDescription' onClick={() => {
                                    setRate("Macbook Pro M1  chip")
                                    setMac(<img src="macbook_pro.png" alt="Macbook Pro M1" />);
                                    setMap("₹199900.00‡")
                                }}> MacBook Air M1 Chip</div></button>

                                <br /><br />
 
                                <button className='btn btn-primary'> <div className='ProductDescription' onClick={() => {
                                    setRate("Macbook Pro M2 chip")
                                    setMac(<img src="macbook_pro_max.png" alt="Macbook_pro M2" />);
                                    setMap("₹249900.00‡")
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

export default Macbook_pro_product