
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Header } from './header/Header';
import { Footer } from './footer/Footer';
import { Pagenotfound } from './pagenotfound/Pagenotfound';
import { Mac } from './mac/Mac';
import { Ipad } from './ipad/Ipad';
import { Iphone } from './iphone/Iphone';
import { Watch } from './watch/Watch';
import Product_data from './watch/product_data/Product_data';
import { Iphone_14 } from './iphone14/Iphone_14';
import { Login } from './login/Login';
import { Sign_up } from './signup/Signup';
import Search from './search/Search';
import BookData from './Data.json'
import Bag from './bag/Bag';
import Mac_product from './mac/mac_product/Mac_product';
import Macbook_pro_product from './mac/macbook_pro_product/Macbook_pro_product';
import Ipad_product from './ipad_product/Ipad_product';


function App() {
  return (
   <>
     <BrowserRouter>
     <Header/>
      <Routes>
      <Route path="/" element={<Mac />} />
      <Route path="ipad" element={<Ipad />} />
      <Route path="iphone" element={<Iphone />} />
      <Route path="Watch" element={<Watch />} />
      <Route path="product_data" element={<Product_data />} />
      <Route path="mac_product" element={<Mac_product />} />
      <Route path="macbook_pro_product" element={<Macbook_pro_product />} />
      <Route path="iphone14" element={<Iphone_14 />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Sign_up />} />
      <Route path="search" element={<Search placeholder="Enter Product Name..." data={BookData}/>} />
      <Route path="bag" element={<Bag />} />
      <Route path="ipad_product" element={<Ipad_product />} />
      <Route path="*" element={<Pagenotfound />} />
      </Routes>
      <Footer/>
     </BrowserRouter>
   </>
  );
}

export default App;
