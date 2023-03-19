import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom"
import "./Dashboard.css";
import axios from "axios";


function Dashboard() {
  const [data, setData] = useState([]);
  //const {id}=useParams();
  const loadUser = async () => {
    const res = await axios.get(`http://localhost:4000/posts`);
    setData(res.data);
  };

  useEffect(() => {
    loadUser();
  }, []);

  const handleDelete=async(id)=>{
   await axios.delete(`http://localhost:4000/posts/${id}`)
   loadUser();
  }
  var i=1;
  return (
    <>
    <h1 className="text-center" >CRUD OPERATIONS USING REACT JS AND JSON SERVER</h1>
    <div className="container">
    <table className="table">
      <thead>
        <tr>
          <th scope="col"> sl no</th>
          <th scope="col">name</th>
          <th scope="col">email</th>
          <th scope="col">mobile</th>
          <th scope="col">password</th>
          <th scope="col">actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((data) => (
          <tr>
            <th scope="row">{i++}</th>
            <td>{data.name}</td>
            <td>{data.email}</td>
            <td>{data.mobile}</td>
            <td>{data.password}</td>
            <td>
            <button className="btn btn-success m-2" type="submit" onClick={()=>handleDelete(data.id)}>delete</button>
           <Link to={`/edituser/${data.id}`}> <button type="button"className="btn btn-danger" >edit</button></Link>
           
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
    <center>
    <Link to="/adduser">
    <button type="submit" className="btn btn-success" >
          Adduser
        </button>
     </Link>
    </center>
    </>
  );

}

export default Dashboard;
