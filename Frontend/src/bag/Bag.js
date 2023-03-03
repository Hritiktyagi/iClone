import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'



const Bag = () => {

  const [data, SetData] = useState([]);
  const [msg, setMsg] = useState([]);

  const getDataAll = () => {
    axios.get(" http://localhost:4004/sign-in")
      .then((res) => {
        SetData(res.data)
      })
      .then((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    console.log("I am from useEffect")
    getDataAll();
  }, [msg])





  const deleteRecord = (_id) => {
    Swal.fire({
      title: 'Do you want to Delete these changes ' + _id + ' ?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Delete',
      denyButtonText: `Don't Delete`,
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete("http://localhost:4004/sign-in/" + _id)
          .then((res) => {
            console.log(res)
            Swal.fire('Deleted!', '', 'Deleted')
            setMsg("Deleted")

          })
          .then((err) => {
            console.log(err)
          })

      } else if (result.isDenied) {
        Swal.fire('Changes are saved ', '', 'info')
      }
    })

  }
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="head">
              User List
            </div>
          </div>
        </div>
        <div className="row">
          {/* <div className="col-md-2"></div> */}
          <div className="col-md-12">
            <table border="1" width="100%">
              <thead>
                <tr>
                  <th>First Name</th>
                  <th>Email ID</th>
                  <th>Mobile Number</th>
                  <th>Password</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) =>
                  <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.mobno}</td>
                    <td>{item.email}</td>
                    <td>{item.pass}</td>
                    <td><Link className='btn btn-success' to={`/edit-user/${item._id}`}>Update</Link>&nbsp;<a href="javascript:void(0)" className='btn btn-danger' onClick={() => { deleteRecord(item._id) }} >Delete</a></td>
                  </tr>
                )}
              </tbody>

            </table>
          </div>
          {/* <div className="col-md-2"></div> */}
        </div>
      </div>
    </>
  )
}

export default Bag