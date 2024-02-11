import React from 'react'
import {useState} from "react"
import { useDispatch } from 'react-redux';
import { FuelSelled } from '../../Redux/ApiCall';
export const EmployeePortal = () => {
     const dispatch=useDispatch();
    const [customername,setCustomername]=useState();
 const [fueltype,setFuelType]=useState();
  const [Quantity,setQuantity]=useState();
  const [price,setPrice]=useState();
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(fueltype)
        const priced=Quantity*100
dispatch(FuelSelled({customername,fueltype,Quantity,priced}))
    }
  return (
    <div>
<div className='container-fluid d-flex align-items-center justify-content-center vh-100'>
<div className='container ' style={{maxWidth:"400px"}}>
    <h1>Add Sell Details</h1>
<form>
    <div className='row'>
      <div className='col-12'>
     <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label"> Customer Name</label>
        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Name" 
        value={customername}
        onChange={(e)=>setCustomername(e.target.value)}
        />
        </div>
</div>
        <div className='col-12 '>
     <div class="dropdown my-2">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Fuel Type
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li onClick={()=>setFuelType("petrol")}><a class="dropdown-item" href="#">Petrol</a></li>
    <li  onClick={()=>setFuelType("diesel")}><a class="dropdown-item" href="#">Diesel</a></li>
    <li  onClick={()=>setFuelType("cng")}><a class="dropdown-item" href="#">CNG</a></li>
  </ul>
</div>

        </div>
         <div className='col-12 text-start'>
    <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">Quantity in Litres</label>
        <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="Quantity" 
        value={Quantity}
        onChange={(e)=>setQuantity(e.target.value)}
        />
      </div>

        </div>

         <div className='col-12 text-start'>
    <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">Price</label>
        <input type="number" className="form-control" disabled id="exampleFormControlInput1" placeholder={Quantity*100} 
        
        />
      </div>

        </div>
       
    </div>
<button className='btn btn-primary' onClick={handleSubmit}>Add</button>
</form>
</div>
    </div>

    </div>
  )
}
