import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
function Add({addCar}) {
  const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const [name, setName] = useState("");
    const [color, setColor] = useState("");
    const [brand,setBrand]=useState("")
    const [power,setPower]=useState("")
    const [type,setType]=useState("")
    const [price,setPrice]=useState("")
    const [img,setImage]=useState("")
    const newCar={
        carName:name,
        carColor:color,
        carBrand:brand,
        carPower:power,
        carType:type,
        carPrice:price,
        carImage:img
    }
    const handleAdd=()=>{
        addCar(newCar)
        setShow(!show)
        navigate('/')

    }
  
    const handleShow = () => {
      setShow(!show)
    };

  return (
    <>
    <button onClick={handleShow}>Add Car</button>
    {show ? (
        <>
          <input
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            placeholder="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
          <input
            placeholder="brand"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
          />
          <input
            placeholder="power"
            value={power}
            onChange={(e) => setPower(e.target.value)}
          />
          <input
            placeholder="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
          />
           <input
            placeholder="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
           <input
            placeholder="image"
            value={img}
            onChange={(e) => setImage(e.target.value)}
          />
          <button onClick={handleAdd} >Submit</button>
        </>
      ) : <div></div>}
    </>
  )
}

export default Add