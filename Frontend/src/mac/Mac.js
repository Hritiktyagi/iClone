import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export const Mac = () => {



     const navigate = useNavigate();
     function handleClick() {
          navigate('/mac_product')
     }
     function handleEvent() {
          navigate('/macbook_pro_product')
     }


     const _useNavigate = useNavigate();
     useEffect(() => {
          if (localStorage.getItem("user_key")) {
               // console.log("if part")
          }
          else {
               _useNavigate("/login")
          }
     }, []);


     return (
          <>
               <>
                    <div className="container">
                         <div className="row">
                              <div className="col-md-12">
                                   <div className="typography-body">
                                        <label className='section-content-label'>New</label>
                                        <h1 className='product-headline'>MacBook Air</h1>
                                        <p className='product-price'>From ₹119900.00*</p>
                                        <div className='cta-links'>
                                             <div className="link-container">
                                                  <a href='' className='btn btn-primary' onClick={handleClick}>Buy</a>
                                             </div>
                                             <div className="link-container">
                                                  <a href=' ' className='button'>Learn more </a><span className='arrow-after-more'>&rarr;</span>
                                             </div>
                                        </div>
                                   </div>
                                   <div className="container p-5" >
                                        <div className="image-wrapper">
                                             <figure className='macbook-air-image' >
                                                  <img src='	https://www.apple.com/v/mac/home/br/images/overview/hero/macbook_air_m2__r1jrymq4ftea_medium.jpg' alt='macbook-air'></img>
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
                                             <h1 className='product-headline'>MacBook Pro 13”</h1>
                                             <p className='product-price'>From ₹129900.00*</p>
                                             <div className='cta-links'>
                                                  <div className="link-container">
                                                       <a href=' ' className='btn btn-primary' onClick={handleEvent}>Buy</a>
                                                  </div>
                                                  <div className="link-container">
                                                       <a href=' ' className='button'>Learn more </a><span className='arrow-after-more'>&rarr;</span>
                                                  </div>
                                             </div>
                                        </div>
                                        <div className="image-wrapper">
                                             <figure className='macbook-air-image'>
                                                  <img src='https://www.apple.com/v/mac/home/br/images/overview/hero/macbook_pro_13__e3r46kd69eoi_large.jpg' alt='macbook-air'></img>
                                             </figure>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>


                    <div className="container ">
                         <div className="row">

                              <div className="col-md-6 model-man">
                                   <div className="mba-device">
                                        <a className='image-wrapper' href=' '>
                                             <figure><img src='https://www.apple.com/v/mac/home/br/images/overview/compare/compare_mba__fchj615oz0yi_large.png' style={{ width: "100%" }} /></figure>
                                        </a>
                                        <div className="device-content">
                                             <figure><img src='https://www.apple.com/v/mac/home/br/images/overview/compare/compare_swatches_three_colors__bagzlsvl2ehu_large.png' /></figure>
                                             <h3 className='compare-item'>Macbook Air</h3>
                                             <p className='compare-item-child'>M1 chip</p>
                                             <p className='product-price'>From ₹99900.00*</p>
                                             <div className='cta-links'>
                                                  <div className="link-container">
                                                       <a href=' ' className='btn btn-primary'>Buy</a>
                                                  </div>
                                                  <div className="link-container">
                                                       <a href=' ' className='button'>Learn more </a><span className='arrow-after-more'>&rarr;</span>
                                                  </div>
                                             </div>
                                        </div>
                                        <ul>
                                             <li className='compare-items'> <div>33.46 cm</div>
                                                  <div className='compare-item-child'>(13.6”) Retina display1</div>
                                             </li>
                                             <li> <img src='https://www.apple.com/v/mac/home/br/images/overview/compare/compare_icon_m1__dsskrswqk7wy_large.png' />
                                                  <div className='compare-item-child'>Apple M1 chip</div>
                                             </li>
                                             <li className='compare-items'> <div>8-core</div>
                                                  <div className='compare-item-child'>CPU</div>
                                             </li>
                                             <li className='compare-items'> <div>7-core</div>
                                                  <div className='compare-item-child'>GPU</div>
                                             </li>

                                             <li> <div><img src='https://www.apple.com/v/mac/home/br/images/overview/compare/compare_icon_unified_memory__emykppauav2a_large.png' /></div>
                                                  <div className='compare-item-child'>Up to 16GB unified memory</div>
                                             </li>

                                             <li> <div><img src="https://www.apple.com/v/mac/home/br/images/overview/compare/compare_icon_m1__dsskrswqk7wy_large.png" /></div>
                                                  <div className="compare-item-child">Up to 24GB unified memory</div></li>

                                             <li className='compare-items'> <div>2TB</div>
                                                  <div className='compare-item-child'>Maximum configurable storage2</div>
                                             </li>
                                             <li> <div><img src='https://www.apple.com/v/mac/home/br/images/overview/compare/compare_icon_battery__fk0ughiyc3am_large.png' /></div>
                                                  <div className='compare-item-child'>Up to 18 hours battery life3</div>
                                             </li>
                                             <li> <div><img src='https://www.apple.com/v/mac/home/br/images/overview/compare/compare_icon_camera__dlxow9r3leie_large.png' /></div>
                                                  <div className='compare-item-child'>720p FaceTime HD camera</div>
                                             </li>
                                             <li> <div><img src='https://www.apple.com/v/mac/home/br/images/overview/compare/compare_icon_mic__bkm7awuvc5qu_large.png' /></div>
                                                  <div className='compare-item-child'>Three‑mic arrayStereo speakers</div>
                                             </li>
                                             <li className='compare-items'> <div>1.29kg</div>
                                                  <div className='compare-item-child'>Weight</div>
                                             </li>
                                             <li> <div><img src='https://www.apple.com/v/mac/home/br/images/overview/compare/compare_icon_touchid__fanxgkqe1xei_large.png' /></div>
                                                  <div className='compare-item-child'>Touch ID</div>
                                             </li>
                                        </ul>
                                   </div>


                                   <div className="mba-device">
                                        <a className='image-wrapper' href=' '>
                                             <figure><img src='https://www.apple.com/v/mac/home/br/images/overview/compare/compare_mba__fchj615oz0yi_large.png' style={{ width: "100%" }} /></figure>
                                        </a>
                                        <div className="device-content">
                                             <figure><img src='https://www.apple.com/v/mac/home/br/images/overview/compare/compare_swatches_three_colors__bagzlsvl2ehu_large.png' /></figure>
                                             <h3 className='compare-item'>Macbook Air</h3>
                                             <p className='compare-item-child'>M1 chip</p>
                                             <p className='product-price'>From ₹99900.00*</p>
                                             <div className='cta-links'>
                                                  <div className="link-container">
                                                       <a href=' ' className='btn btn-primary'>Buy</a>
                                                  </div>
                                                  <div className="link-container">
                                                       <a href=' ' className='button'>Learn more </a><span className='arrow-after-more'>&rarr;</span>
                                                  </div>
                                             </div>
                                        </div>
                                        <ul>
                                             <li className='compare-items'> <div>33.46 cm</div>
                                                  <div className='compare-item-child'>(13.6”) Retina display1</div>
                                             </li>
                                             <li> <img src='https://www.apple.com/v/mac/home/br/images/overview/compare/compare_icon_m1__dsskrswqk7wy_large.png' />
                                                  <div className='compare-item-child'>Apple M1 chip</div>
                                             </li>
                                             <li className='compare-items'> <div>8-core</div>
                                                  <div className='compare-item-child'>CPU</div>
                                             </li>
                                             <li className='compare-items'> <div>7-core</div>
                                                  <div className='compare-item-child'>GPU</div>
                                             </li>

                                             <li> <div><img src='https://www.apple.com/v/mac/home/br/images/overview/compare/compare_icon_unified_memory__emykppauav2a_large.png' /></div>
                                                  <div className='compare-item-child'>Up to 16GB unified memory</div>
                                             </li>

                                             <li> <div><img src="https://www.apple.com/v/mac/home/br/images/overview/compare/compare_icon_m1__dsskrswqk7wy_large.png" /></div>
                                                  <div className="compare-item-child">Up to 24GB unified memory</div></li>

                                             <li className='compare-items'> <div>2TB</div>
                                                  <div className='compare-item-child'>Maximum configurable storage2</div>
                                             </li>
                                             <li> <div><img src='https://www.apple.com/v/mac/home/br/images/overview/compare/compare_icon_battery__fk0ughiyc3am_large.png' /></div>
                                                  <div className='compare-item-child'>Up to 18 hours battery life3</div>
                                             </li>
                                             <li> <div><img src='https://www.apple.com/v/mac/home/br/images/overview/compare/compare_icon_camera__dlxow9r3leie_large.png' /></div>
                                                  <div className='compare-item-child'>720p FaceTime HD camera</div>
                                             </li>
                                             <li> <div><img src='https://www.apple.com/v/mac/home/br/images/overview/compare/compare_icon_mic__bkm7awuvc5qu_large.png' /></div>
                                                  <div className='compare-item-child'>Three‑mic arrayStereo speakers</div>
                                             </li>
                                             <li className='compare-items'> <div>1.29kg</div>
                                                  <div className='compare-item-child'>Weight</div>
                                             </li>
                                             <li> <div><img src='https://www.apple.com/v/mac/home/br/images/overview/compare/compare_icon_touchid__fanxgkqe1xei_large.png' /></div>
                                                  <div className='compare-item-child'>Touch ID</div>
                                             </li>
                                        </ul>
                                   </div>

                              </div>

                              <div className="col-md-6 model-man">
                                   <div className="mba-device">
                                        <a className='image-wrapper' href=' '>
                                             <figure><img src='https://www.apple.com/v/mac/home/br/images/overview/compare/compare_mba__fchj615oz0yi_large.png' style={{ width: "100%" }} /></figure>
                                        </a>
                                        <div className="device-content">
                                             <figure><img src='https://www.apple.com/v/mac/home/br/images/overview/compare/compare_swatches_three_colors__bagzlsvl2ehu_large.png' /></figure>
                                             <h3 className='compare-item'>Macbook Air</h3>
                                             <p className='compare-item-child'>M1 chip</p>
                                             <p className='product-price'>From ₹99900.00*</p>
                                             <div className='cta-links'>
                                                  <div className="link-container">
                                                       <a href=' ' className='btn btn-primary'>Buy</a>
                                                  </div>
                                                  <div className="link-container">
                                                       <a href=' ' className='button'>Learn more </a><span className='arrow-after-more'>&rarr;</span>
                                                  </div>
                                             </div>
                                        </div>
                                        <ul>
                                             <li className='compare-items'> <div>33.46 cm</div>
                                                  <div className='compare-item-child'>(13.6”) Retina display1</div>
                                             </li>
                                             <li> <img src='https://www.apple.com/v/mac/home/br/images/overview/compare/compare_icon_m1__dsskrswqk7wy_large.png' />
                                                  <div className='compare-item-child'>Apple M1 chip</div>
                                             </li>
                                             <li className='compare-items'> <div>8-core</div>
                                                  <div className='compare-item-child'>CPU</div>
                                             </li>
                                             <li className='compare-items'> <div>7-core</div>
                                                  <div className='compare-item-child'>GPU</div>
                                             </li>

                                             <li> <div><img src='https://www.apple.com/v/mac/home/br/images/overview/compare/compare_icon_unified_memory__emykppauav2a_large.png' /></div>
                                                  <div className='compare-item-child'>Up to 16GB unified memory</div>
                                             </li>

                                             <li> <div><img src="https://www.apple.com/v/mac/home/br/images/overview/compare/compare_icon_m1__dsskrswqk7wy_large.png" /></div>
                                                  <div className="compare-item-child">Up to 24GB unified memory</div></li>

                                             <li className='compare-items'> <div>2TB</div>
                                                  <div className='compare-item-child'>Maximum configurable storage2</div>
                                             </li>
                                             <li> <div><img src='https://www.apple.com/v/mac/home/br/images/overview/compare/compare_icon_battery__fk0ughiyc3am_large.png' /></div>
                                                  <div className='compare-item-child'>Up to 18 hours battery life3</div>
                                             </li>
                                             <li> <div><img src='https://www.apple.com/v/mac/home/br/images/overview/compare/compare_icon_camera__dlxow9r3leie_large.png' /></div>
                                                  <div className='compare-item-child'>720p FaceTime HD camera</div>
                                             </li>
                                             <li> <div><img src='https://www.apple.com/v/mac/home/br/images/overview/compare/compare_icon_mic__bkm7awuvc5qu_large.png' /></div>
                                                  <div className='compare-item-child'>Three‑mic arrayStereo speakers</div>
                                             </li>
                                             <li className='compare-items'> <div>1.29kg</div>
                                                  <div className='compare-item-child'>Weight</div>
                                             </li>
                                             <li> <div><img src='https://www.apple.com/v/mac/home/br/images/overview/compare/compare_icon_touchid__fanxgkqe1xei_large.png' /></div>
                                                  <div className='compare-item-child'>Touch ID</div>
                                             </li>
                                        </ul>
                                   </div>

                                   <div className="mba-device">
                                        <a className='image-wrapper' href=' '>
                                             <figure><img src='https://www.apple.com/v/mac/home/br/images/overview/compare/compare_mba__fchj615oz0yi_large.png' style={{ width: "100%" }} /></figure>
                                        </a>
                                        <div className="device-content">
                                             <figure><img src='https://www.apple.com/v/mac/home/br/images/overview/compare/compare_swatches_three_colors__bagzlsvl2ehu_large.png' /></figure>
                                             <h3 className='compare-item'>Macbook Air</h3>
                                             <p className='compare-item-child'>M1 chip</p>
                                             <p className='product-price'>From ₹99900.00*</p>
                                             <div className='cta-links'>
                                                  <div className="link-container">
                                                       <a href=' ' className='btn btn-primary'>Buy</a>
                                                  </div>
                                                  <div className="link-container">
                                                       <a href=' ' className='button'>Learn more </a><span className='arrow-after-more'>&rarr;</span>
                                                  </div>
                                             </div>
                                        </div>
                                        <ul>
                                             <li className='compare-items'> <div>33.46 cm</div>
                                                  <div className='compare-item-child'>(13.6”) Retina display1</div>
                                             </li>
                                             <li> <img src='https://www.apple.com/v/mac/home/br/images/overview/compare/compare_icon_m1__dsskrswqk7wy_large.png' />
                                                  <div className='compare-item-child'>Apple M1 chip</div>
                                             </li>
                                             <li className='compare-items'> <div>8-core</div>
                                                  <div className='compare-item-child'>CPU</div>
                                             </li>
                                             <li className='compare-items'> <div>7-core</div>
                                                  <div className='compare-item-child'>GPU</div>
                                             </li>

                                             <li> <div><img src='https://www.apple.com/v/mac/home/br/images/overview/compare/compare_icon_unified_memory__emykppauav2a_large.png' /></div>
                                                  <div className='compare-item-child'>Up to 16GB unified memory</div>
                                             </li>

                                             <li> <div><img src="https://www.apple.com/v/mac/home/br/images/overview/compare/compare_icon_m1__dsskrswqk7wy_large.png" /></div>
                                                  <div className="compare-item-child">Up to 24GB unified memory</div></li>

                                             <li className='compare-items'> <div>2TB</div>
                                                  <div className='compare-item-child'>Maximum configurable storage2</div>
                                             </li>
                                             <li> <div><img src='https://www.apple.com/v/mac/home/br/images/overview/compare/compare_icon_battery__fk0ughiyc3am_large.png' /></div>
                                                  <div className='compare-item-child'>Up to 18 hours battery life3</div>
                                             </li>
                                             <li> <div><img src='https://www.apple.com/v/mac/home/br/images/overview/compare/compare_icon_camera__dlxow9r3leie_large.png' /></div>
                                                  <div className='compare-item-child'>720p FaceTime HD camera</div>
                                             </li>
                                             <li> <div><img src='https://www.apple.com/v/mac/home/br/images/overview/compare/compare_icon_mic__bkm7awuvc5qu_large.png' /></div>
                                                  <div className='compare-item-child'>Three‑mic arrayStereo speakers</div>
                                             </li>
                                             <li className='compare-items'> <div>1.29kg</div>
                                                  <div className='compare-item-child'>Weight</div>
                                             </li>
                                             <li> <div><img src='https://www.apple.com/v/mac/home/br/images/overview/compare/compare_icon_touchid__fanxgkqe1xei_large.png' /></div>
                                                  <div className='compare-item-child'>Touch ID</div>
                                             </li>
                                        </ul>
                                   </div>
                              </div>

                         </div>
                    </div>


               </>

          </>
     );
};
