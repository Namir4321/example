import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { userRegister } from '../../Redux/ApiCall';
export const Signup = () => {
    const dispatch=useDispatch();
  const [email,setEmail]=useState();
  const [password,setPassword]=useState();
  const [name,setName]=useState();
const handleSubmit=(e)=>{
e.preventDefault();
console.log(email)
dispatch(userRegister({name,email,password}))
}

    return (
    
        <div className='container-fluid d-flex align-items-center justify-content-center vh-100'>
<div className='container ' style={{maxWidth:"400px"}}>
    <h1>Register</h1>
<form>
    <div className='row text-start'>
      <div className='col-12'>
              <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Name" 
        value={name}
        onChange={(e)=>setName(e.target.value)}
        />
      </div>
        </div>
        <div className='col-12'>
              <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Email" 
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        />
      </div>
        </div>
        <div className='col-12'>
              <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">Password</label>
        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Password" 
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        />
      </div>
        </div>
    </div>
<button className='btn btn-primary' onClick={handleSubmit}>Register</button>
</form>
</div>
    </div>
    
  )
}
