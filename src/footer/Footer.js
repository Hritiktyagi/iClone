import React from 'react'

export const Footer = () => {
  return (
    <>

      <div className="container-fluid mt-5" >
        <div className="row">
          <div className="col-md-3">
            <ul>
              <div style={{ border: "solid", borderTopWidth: "0px", borderColor: "red", borderRightWidth: "0px", borderBottomWidth: "0px", marginTop: "5%" }} >
                <span style={{ marginLeft: "2%" }}>Shop and Learn</span>
              </div><br />
              <li><i class="fa-solid fa-location-dot"></i><a href="" style={{ paddingLeft: "1rem" }}> G11-12 Aditya Complex D-Block Market</a></li><br />
              <li><i class="fa-solid fa-envelope"></i><a href="" style={{ paddingLeft: "1rem" }}>tyagihritik041@gmail.com</a></li><br></br>
              <li><i class="fa-solid fa-phone"></i><a href="" style={{ paddingLeft: "1rem" }}>8287767989</a></li><br />
              <li><i class="fa-solid fa-mobile-screen"></i><a href="" style={{ paddingLeft: "1rem" }}>8287767989</a></li><br />
            </ul>
          </div>

          <div className="col-md-3">
            <ul>
              <div style={{ border: "solid", borderTopWidth: "0px", borderColor: "red", borderRightWidth: "0px", borderBottomWidth: "0px", marginTop: "5%" }} >
                <span style={{ marginLeft: "2%" }}>Account</span>
              </div><br />

              <li><a href="">Manage Your Apple ID</a></li><br />
              <li><a href="">Apple Store Account</a></li><br />
              <li><a href="">Packages</a></li><br />
              <li><a href="">iCloud.com</a></li><br />
            </ul>
          </div>

          <div className="col-md-3">
            <ul>
              <div style={{ border: "solid", borderTopWidth: "0px", borderColor: "red", borderRightWidth: "0px", borderBottomWidth: "0px", marginTop: "5%" }} >
                <span style={{ marginLeft: "2%" }}>Entertainment</span>
              </div><br />
              <li><a href="">Apple One</a></li><br />
              <li><a href="">Apple TV+</a></li><br />
              <li><a href="">Apple Music</a></li><br />
              <li><a href="">Apple Arcade</a></li><br />
              <li><a href="">Apple Podcasts</a></li><br />

            </ul>

          </div>
          <div className="col-md-3">
            <ul>
              <div style={{ border: "solid", borderTopWidth: "0px", borderColor: "red", borderRightWidth: "0px", borderBottomWidth: "0px", marginTop: "5%" }} >
                <span style={{ marginLeft: "2%" }}>Apple Store</span>
              </div><br />
              <li><a href="">
                <span style={{ fontWeight: "bold" }}>Helpline Numbers</span>
                <span style={{ color: "orange" }}>(8AM to 10PM):</span>
                <span> +91-8130890090, +91-8130890090</span>
              </a></li><br />
              <li><a href="">
                <span style={{ fontWeight: "bold" }}>Corp office/ Postal Address</span>
              </a></li><br />
              <li><a href="">
                <span style={{ fontWeight: "bold" }}>Phone Numbers:</span>
                <span>7042827160 ,
                  011-27568832 , 9868387223</span>
              </a></li><br />
              <li>
                <a href="#"><i class="fa-brands fa-facebook-f" style={{ fontSize: "32px" }}></i></a>

                <a href="#"><i class="fa-brands fa-youtube" style={{ fontSize: "32px", paddingLeft: "1rem" }}></i></a>

                <a href="#"><i class="fa-brands fa-instagram" style={{ fontSize: "32px", paddingLeft: "1rem" }}></i></a>

                <a href="#"><i class="fa-brands fa-google-plus-g" style={{ fontSize: "32px", paddingLeft: "1rem" }}></i></a>
              </li><br />

            </ul>
          </div>
        </div>
      </div>

      <div class="col-md-12" style={{ height: "auto", backgroundColor: "darkblue" }}>

        <span style={{ marginLeft: "2%", color: "white", fontSize: "smaller" }}>
          © 2022 Citizens Home Warranty. All rights reserved.
        </span>
        <span style={{ marginRight: "2%", color: "white", float: "right", fontSize: "smaller" }} >
          Franchise|Web Design & Development by Webentace
        </span>

      </div>

    </>

  )
}
