import React, { useState ,useEffect } from "react";
import Home from "./components/Home";
import Search from "./components/Search";
import Add from "./components/Add";
import axios from "axios";
import { Routes, Route} from "react-router-dom";
import { useNavigate } from "react-router-dom";

function App() {
const[data,setData]=useState([])
const[searched,setSearched]=useState([])
const[triger,setTriger]=useState(false)
const [name,setName]=useState("")
const navigate=useNavigate();
const fetch=()=>{
  axios.get("http://localhost:5000/api/cars")
  .then((res)=>{
    setData(res.data)
    
  })
  .catch((err)=>{console.log(err)})
}
const search=(car)=>{
  axios.get(`http://localhost:5000/api/cars/${car}`)
  .then((res)=>{
    setSearched(res.data)
    navigate('/search')
    console.log(searched)
  })
  .catch((err)=>{console.log(err)})
}

const addCar=(car)=>{
  axios.post("http://localhost:5000/api/cars",car)
  .then((res)=>{
    console.log(res.data)
    setTriger(!triger)
  })
  .catch((err)=>{console.log(err)})
}

const deleteCar = (id)=>{
  axios.delete(`http://localhost:5000/api/cars/${id}`)
  .then((res)=>{
    console.log(res.data)
    setTriger(!triger)
  })
  .catch((err)=>{console.log(err)})
}

const update=(id,newCar)=>{
axios.put(`http://localhost:5000/api/cars/${id}`,newCar)
.then((res=>{
  console.log(res.data)
  setTriger(!triger)
}))
.catch((err)=>{console.log(err)})
} 

useEffect(()=>{
  fetch()
  console.log(data)
 
},[triger])
const handleSearch=()=>{
  search(name)
}
return (
  <>
  <div>
  <input placeholder="Search" onChange={(e)=>setName(e.target.value)}  />
  <button onClick={handleSearch}>search </button>
</div>
<Routes>   
< Route path="/Search" element={<Search searched={searched} />} />
 < Route path="/add" element ={< Add addCar={addCar}/>}/>
  <Route path='/'  element={<Home data={data} update={update} deleteCar={deleteCar}/>}/>
</Routes>
  </>

 
 

  )
}
 

export default App;
