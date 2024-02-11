import React, { useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import { sellDetail } from '../../Redux/ApiCall';
import { useDispatch } from 'react-redux';

export const Sellsmade = () => {
  const dispatch=useDispatch();
    const sells=useSelector((state)=>state.sell.sells)
const handleView=(id)=>{
// dispatch(sellDetail({id}))
}
    
const columns = [
  { field: '_id', headerName: 'ID', width: 70 },
  { field: 'customername', headerName: 'Name', width: 130 },
  { field: 'fueltype', headerName: 'Fueltype', width: 130 },
  { field: 'createdAt', headerName: 'Date', width: 70 },
  
  {
    field: 'Quantity',
    headerName: 'Quantity',
    type: 'number',
    width: 90,
    
  },
   {
    field: 'Amount',
    headerName: 'Amount',
    type: 'number',
    width: 90,
    
  },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/selldetail/" + params.row._id}>
              <button className="productListEdit">view</button>
            </Link>
            <div
              className="productListDelete"
              // onClick={() => handleView(params.row._id)}
            />
          </>
        );
      },
    },


];




  return (
    <div>
<div className='container' style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={sells}
        columns={columns}
           getRowId={(row) => row._id}

        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
    </div>      
  )
}  

