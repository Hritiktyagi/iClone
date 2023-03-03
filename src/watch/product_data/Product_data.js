import React ,{ useState} from "react"


const Product_data = () => {
  // const [red, setred] = useState( <img src='https://imgur.com/iOeUBV7.png' alt='product-preview'/> );
  const [red , setred] = useState( <img src='ultra.png' alt='product-preview'/>)
  const[data,setData] = useState("Titanium Case with green Alpine Loop")

 
    
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
        <i class="fa-solid fa-heart-pulse"></i>
          </div>  */}
        </div>
        </div>
        </div>
        <div className="col-md-6">
        <div className="ProductData">
         <h1 className="ProductTitle"><i class="fa-brands fa-apple"></i> Watch <span className="WatchName">Ultra</span></h1>
       
         <p className="ProductDescription">Adventure awaits.</p>
         <p className="ProductDescription">{data}</p>
         <p className='TitlePrice'>From ₹10581.00/mo.Per Month with EMI,Footnote** or ₹89900.00Footnote‡</p>
         <p>The aerospace-grade titanium case strikes the perfect balance of weight, durability and corrosion resistance. <br/>
            The rugged Alpine Loop is made from two textile layers woven together into one continuous piece without stitching, with a titanium G-hook to ensure a secure fit.</p>
        <h3 className='SectionHead'>Select color</h3>
       
  
        
     
        {/* <img className="ProductImage" src="ultra.png" alt='green color watch' onClick={()=>{
          setred(<img src="ultra.png" alt='grey color watch'/>)
        }} />  */}
      
       
        <img className="ProductImage" src="ultra3.png" alt='orange color watch' onClick={()=>{
          setData("Titanium Case with Orange Alpine Loop")
          setred(<img src="ultra3.png" alt="orange color watch"/>)
        }} /> 

<img className="ProductImage" src="ultra.png" alt='orange color watch' onClick={()=>{
  setData("Titanium Case with Grey Alpine Loop")
  setred(<img src="ultra.png" alt="orange color watch"/>)
}}/>
       

         <img className="ProductImage" src="ultra1.png" alt='starlight color watch' onClick={()=>{
          setred(<img src="ultra1.png" alt='silver color watch'/> )
          setData("Titanium Case with Starlight Alpine Loop")
         }}/>
         {/* <img className="ProductImage" src="https://imgur.com/Mplj1YR.png" alt='red color watch' onClick={()=>{
          setred(<img src="https://imgur.com/Mplj1YR.png" alt='red color watch'/> )
         }}/> */}
        
        
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

export default Product_data