import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2';

import '../login/login.css';

export const Login = () => {

    const [state, setState] = useState({
        username: '',
        password: ''
    })




    const _useNavigate = useNavigate();
    // const [msg,setMsg]=useState();
    const handler = (event) => {
        const { name, value } = event.target;
        setState({ ...state, [name]: value })
    }
    const login = (event) => {
        event.preventDefault();
        // console.log(state);
        axios.post("http://localhost:4004/login", state)
            .then((res) => {
                console.log(res);
                // console.log(res.data.token)
                // token
                localStorage.setItem("user_key", res.data.token);
                Swal.fire({
                    position: 'between',
                    icon: 'success',
                    title: 'You have logged In successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
                _useNavigate("/dashboard")




            })
            .then((err) => {
                console.log(err);
            })
    }



    return (
        <>
            <div className="container-fluid" >
                <div className="bg_color">
                    <div className="row">
                        <div className="col-md-12" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '2rem' }}>
                            <div className="col-md-3"></div>
                            <div className="col-md-6 ">

                                <div style={{ textAlign: "center" }}><img src='logo.PNG' alt='logo' /></div>
                                <div className='Id_manage'>Apple ID </div>
                                <div className='account_manage' style={{ textAlign: "center" }}>Log In To Buy Products </div>

                                <form action='' onSubmit={login}>
                                    <div className="mb-3">
                                        <input type="text" className='form-control' name="username" onChange={handler} placeholder='Apple ID' />
                                    </div>
                                    <div className="mb-3">
                                        <input type="password" name='password' onChange={handler} className="form-control" placeholder="Password" />
                                    </div>
                                    <div className="mb-3">
                                        <input type="submit" className='form-control btn btn-primary' value="Log In" style={{ width: '25%' }} />
                                    </div>
                                </form>
                            </div>
                            <div className="col-md-3"></div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
