import React, { useState } from "react";

import axios from "axios"
import "./Adduser.css";
import { useNavigate } from "react-router-dom";

function Adduser() {
  const navigate=useNavigate();
    const handleFormSubmit=async()=>{
        let response=await axios.post('http://localhost:4000/posts',formData).then(navigate("/"))
        if(response){
            alert("data submitted sucessfully")
        }else{
            alert("something went wrong")
        }
      
        setFormData({
            name:'',
            email:'',
            mobile:'',
            password:""
        })
        

    }
    const [formData,setFormData]=useState({
        name:'',
        email:'',
        mobile:'',
        password:""
    })
  return (
    <div className="container">
      <h1 className="adduser-h1">Adduser</h1>
      <form>
        <div className="mb-3 ">
          <label  className="form-label ">
            Full Name
          </label>
          <input type="text" className="form-control" id="exampleInputName" value={formData.name} onChange={(e)=>setFormData({...formData,name:e.target.value})} />
        </div>
        <div className="mb-3 ">
          <label  className="form-label ">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            value={formData.email} onChange={(e)=>setFormData({...formData,email:e.target.value})}
          />
        </div>
        <div className="mb-3 ">
          <label  className="form-label ">
            Mobile no
          </label>
          <input
            type="number"
            className="form-control"
            id="exampleInputMobile"
            value={formData.mobile} onChange={(e)=>setFormData({...formData,mobile:e.target.value})}
          />
        </div>
        <div className="mb-3">
          <label  className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            value={formData.password} onChange={(e)=>setFormData({...formData,password:e.target.value})}
          />
        </div>

        <button type="submit" className="btn btn-success" onClick={handleFormSubmit}>
          Adduser
        </button>
      </form>
    </div>
  );
}

export default Adduser;
