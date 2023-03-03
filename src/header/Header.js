import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../header/header.css';


export const Header = () => {

  const _useNavigate = useNavigate();
  _useNavigate("/login")
  const logout = () => {
    localStorage.removeItem("user_key");


  }





  return (
    <>
      <nav class="navbar navbar-expand-lg" style={{ background: "rgba(0,0,0,0.8)" }}>
        <div class="container-fluid" >

          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav ">

              <Link class="nav-link active" style={{ color: "white" }} aria-current="page" to="/">Mac</Link>
              <Link class="nav-link active" style={{ color: "white" }} aria-current="page" to="ipad" >  ipad</Link>
              <Link class="nav-link active" style={{ color: "white" }} aria-current="page" to="iphone" >iphone</Link>
              <Link class="nav-link active" style={{ color: "white" }} aria-current="page" to="watch" >Watch</Link>
              <Link class="nav-link active" style={{ color: "white" }} aria-current="page" to="search"><i class=" fa fa-thin fa-magnifying-glass"></i></Link>
              <Link class="nav-link active" style={{ color: "white" }} aria-current="page" to="bag"><i class=" fa fa-thin fa-bag-shopping"></i></Link>
            </div>


          </div>
          <div className="float float-end  " >


            <Link class="nav-link active" style={{ color: "white" }} aria-current="page" to="login">log In</Link> &nbsp;
            <Link class="nav-link active" style={{ color: "white" }} aria-current="page" to="signup" >Sign Up</Link>&nbsp
            <Link class="nav-link active" style={{ color: "white" }} aria-current="page" onClick={logout} to="login" >Log out</Link>


          </div>
        </div>
      </nav>






    </>
  )
}
