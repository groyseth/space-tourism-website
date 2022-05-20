import React from 'react'
import "../../css/dest.css"
import { destinations } from "../../data"
import pic from "../../assets/destination/image-moon.png"
export default function Moon() {
  console.log(destinations[0].images);
  return (
    <div className='navPlanets'>
      <h1 className='name'>MOON</h1>
      <p className='discript'>See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.</p>
      <img src={pic} alt="" className="planet" />

      <div className='pickDest'>
       <h1 className='pickDestNum'>01</h1> <h1>Pick your destination</h1>
      </div>
    </div>
  )
}
