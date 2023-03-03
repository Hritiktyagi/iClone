
import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import '../login/login.css';

export const Sign_up = () => {


  const [state, setState] = useState({
    name: '',
    email: '',
    mobno: '',
    pass: '',

  })

  const [msg, setMsg] = useState("")

  const _useNavigate = useNavigate();

  const handler = (event) => {
    const { name, value } = event.target;

    setState({ ...state, [name]: value })
  }

  const signup = (event) => {
    event.preventDefault();
    // console.log(state);
    axios.post("http://localhost:4004/sign-up", state)
      .then((res) => {
        console.log(res);
        setMsg(res.data.msg)
        Swal.fire({
          position: 'between',
          icon: 'success',
          title: 'You have Signed up successfully',
          showConfirmButton: false,
          timer: 1500
        })
        _useNavigate("/login")
      })
      .then((err) => {
        console.log(err)
      })


  }



  return (
    
    <div className="container">
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <div className='logo'><img src='logo.PNG' alt='logo' /></div>
          <div className='Id_manage'>Create New Apple ID</div>

          <form action="" onSubmit={signup}>
            <div className="mb-3">

              <input type="text" name='name' onChange={handler} className="form-control" placeholder="Full Name" />
            </div>
            <div className="mb-3">

              <input type="text" name='email' onChange={handler} className="form-control" placeholder="Email Id" />
            </div>
            <div className="mb-3">

              <input type="text" name='mobno' onChange={handler} className="form-control" placeholder="Mobile Number" />
            </div>
            <div className="mb-3">

              <input type="text" name='pass' onChange={handler} className="form-control" placeholder="Password" />
            </div>
            <div className="mb-3">

              <input type="submit" className="form-control btn btn-primary" value="Sign Up" />
            </div>
          </form>
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  )
}
