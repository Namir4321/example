import React, { useEffect,useState } from 'react'
import { useLocation } from 'react-router-dom' 
import { userRequest } from '../../Request';
import { jsPDF } from "jspdf";
export const SellsDetails = () => {
    const [details,setDetails]=useState("");
   const location=useLocation();
    const sellsId = location.pathname.split("/")[2];
console.log(sellsId)
useEffect(()=>{
    const getdetails=async()=>{
      const res=await userRequest.get(`api/selling/selldetails/${sellsId}`);
console.log(res.data)
setDetails(res.data)
       
    }
    getdetails();
},[sellsId])

 const formatDateTime = (dateTimeString) => {
    const options = {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    };

    const formattedDate = new Date(dateTimeString).toLocaleDateString('en-US', options);
    const formattedTime = new Date(dateTimeString).toLocaleTimeString('en-US', options);

    return `${formattedTime} `;
  };
const pdf=()=>{
    const doc = new jsPDF();

doc.text(`Name${details.customername}`, 20, 10);
doc.text(`Amount${details.Amount}`, 20, 30);
doc.text(`FuelType${details.fueltype}`, 20, 50);
doc.text(`Quantity${details.Quantity}litres`, 20, 70);
doc.text(`Date and time${details.createdAt}`, 20, 90);

doc.save("a4.pdf");
}
  
  return (
    <div>
<h1>Customer Name:{details.customername}</h1>
<h1>Amount:{details.Amount}</h1>
<h1>Fueltype:{details.fueltype}</h1>
<h1>Quantity:{details.Quantity}litres</h1>
  <h6>{formatDateTime(details.createdAt)}</h6>
<button onClick={pdf}>Dowanload Pdf</button>



    </div>
  )
}
