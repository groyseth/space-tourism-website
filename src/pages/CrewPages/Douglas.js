import React from 'react'
import {crew} from "../../data"
import pic from "../../assets/crew/image-douglas-hurley.png"
import "../../css/crew.css"
export default function Douglas() {
  return (
    <div className='navPlanets'>
    {/* <h1 className='name'></h1> */}
    <p className='discript'>{crew[0].description}</p>
    <img src={pic} alt="" className="crewPic" />

    <div className='pickDest'>
      <h1 className='pickDestNum'>02</h1> <h1>MEET YOUR CREW</h1>
    </div>
    <div className='crewDis'>
      <div className=''>
         <h1 className='crewDisText'>{crew[0].bio}</h1>
      </div>
      {/* <div className='stats'>
        <h1 className='distance'>{crew[0].travel}</h1>
      </div> */}
    </div>
  </div>
  )
}
