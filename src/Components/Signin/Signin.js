import React, { useState } from 'react'
import {useDispatch} from "react-redux";
import {jsPDF} from "jspdf"
import { userlogin } from '../../Redux/ApiCall';
import { useNavigate } from 'react-router-dom';
export const Signin = () => {
  const navigate=useNavigate();
const [email,setEmail]=useState();
const [password,setPassword]=useState();
const dispatch=useDispatch();
const handleSubmit=(e)=>{
    e.preventDefault();
    dispatch(userlogin({email,password}))
    navigate("/sellsmade")
}
  return (
    <div className='container-fluid d-flex align-items-center justify-content-center vh-100'>
<div className='container ' style={{maxWidth:"400px"}}>
    <h1>Login</h1>
<form>
    <div className='row text-start'>
        <div className='col-12'>
              <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" 
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        />
      </div>
        </div>
        <div className='col-12'>
              <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
        <input type="password" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" 
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        />
      </div>
        </div>
    </div>
<button className='btn btn-primary' onClick={handleSubmit}>Login</button>
</form>
</div>
    </div>
  )
}
