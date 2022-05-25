import React from 'react'
import "../../css/destinations/dest.scss"
import { destinations } from "../../data"
import pic from "../../assets/destination/image-moon.png"
export default function Moon() {
  console.log(destinations[0].images);
  return (
    <section className='navPlanets'>
      <div className='infoPlace'>
        <h1 className='name'>MOON</h1>
        <p className='discript'>{destinations[0].description}</p>
      </div>
      <div className='planetPlace'>
        <img src={pic} alt="" className="planet" />
      </div>
      <div className='pickDest'>
        <h1 className='pickDestNum'>01</h1> <h1>Pick your destination</h1>
      </div>
      <div className='statPos'>
        <div className='stats'>
          <p className='distanceNum'>AVG. DISTANCE</p> <h1 className='distance'>{destinations[0].distance}</h1>
        </div>
        <div className='stats'>
          <p className='distanceNum'>Est. travel time</p><h1 className='distance'>{destinations[0].travel}</h1>
        </div>
      </div>
    </section>
  )
}
