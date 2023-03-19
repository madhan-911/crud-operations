// import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Adduser from "./components/Adduser";
import Edituser from "./components/Edituser";
import Dashboard from "./components/Dashboard";


function App() {
  //const {id}=useParams();
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Dashboard />}></Route>
        <Route exact path="/dashboard" element={<Dashboard />}></Route>
        <Route exact path="/adduser" element={<Adduser />}></Route>
        <Route exact path={`/edituser/:id`} element={<Edituser />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
