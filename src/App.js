import logo from './logo.svg';
import './App.css';
import { LoginPage } from './Pages/LoginPage.js/LoginPage';
import {Routes,Route,Redirect,Navigate} from "react-router-dom";
import { Signin } from './Components/Signin/Signin';
import { Signup } from './Components/Signup/Signup';
import { useSelector } from 'react-redux';
import { AdminControls } from './Components/Admindetails/AdminControls';
import { EmployeePortal } from './Components/EmployeePortal/EmployeePortal';
import { Sellsmade } from './Components/sellmade/Sellsmade';
import { SellsDetails } from './Components/sellmade/SellsDetails';
function App() {
  const user=useSelector((state)=>state.user);

  return (
    <div className="App">
    <Routes>

    <Route path="/"  element={<Signin/>}/>
    <Route path="/register"  element={<Signup/>}/>
    <Route path="/add"  element={<AdminControls/>}/>
    <Route path="/sell"  element={<EmployeePortal/>}/>
    <Route path="/sellsmade"  element={<Sellsmade/>}/>
  <Route path="/selldetail/:sellsId" element={<SellsDetails/>}/>
  
    </Routes>
    </div>
  );
}

export default App;
