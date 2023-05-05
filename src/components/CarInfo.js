import { useState } from "react"
import Update from "./Update"
function CarInfo({car,update,deleteCar}) {
const [show,setShow]=useState(false)
 const handleShow=()=>{
    setShow(!show)
 }

   return (
    <div className="card" style={{ width: "18rem" }}>
  <img src={car.carImage} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{car.carName}</h5>
    <button onClick={handleShow}  className="btn btn-primary">
      show more
    </button>
    <div>
     {show ?
     <>
      <div>{car.carBrand}</div>
      <div>{car.carColor}</div>
      <div>{car.carPower}</div>
      <div>{car.carType}</div>
      <div>{car.carPrice}</div>
      < Update car={car} update={update} deleteCar={deleteCar} />
      </>:<div></div>}

     </div>
  </div>
</div>

  
  )
}

export default CarInfo

