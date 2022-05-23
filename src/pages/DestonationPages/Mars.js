import React from 'react'
import "../../css/destinations/dest.css"
import { destinations } from "../../data"
import pic from "../../assets/destination/image-mars.png"
export default function Mars() {
    return (
        <section className='navPlanets' >
            <h1 className='name'>MARS</h1>
            <p className='discript'>{destinations[1].description}</p>
            <img src={pic} alt="" className="planet" />

            <div className='pickDest'>
                <h1 className='pickDestNum'>01</h1> <h1>Pick your destination</h1>
            </div>
            <div className='statPos'>
                <div className='stats'>
                    <p className='distanceNum'>AVG. DISTANCE</p> <h1 className='distance'>{destinations[1].distance}</h1>
                </div>
                <div className='stats'>
                    <p className='distanceNum'>Est. travel time</p><h1 className='distance'>{destinations[1].travel}</h1>
                </div>
            </div>
        </section>
    )
}
