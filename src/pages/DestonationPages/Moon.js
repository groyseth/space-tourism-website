import React from 'react'
import "../../css/dest.css"
import { destinations} from "../../data"
import pic from "../../assets/destination/image-moon.png"
export default function Moon() {
console.log(destinations[0].images);
  return (
    <div className='navPlanets'>
    <h1 className='name'>{destinations[0].name}</h1>

    <img src={pic} alt="" className="planet"/>
    </div>
    
  )
}
