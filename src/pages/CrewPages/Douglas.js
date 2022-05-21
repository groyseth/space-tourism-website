import React from 'react'
import { crew } from "../../data"
import pic from "../../assets/crew/image-douglas-hurley.png"
import "../../css/crew.css"
export default function Douglas() {
    return (
        <section className='navPlanets'>
           
            
            <img src={pic} alt="" className="crewPic" />

            <div className='pickDest'>
                <h1 className='pickDestNum'>02</h1> <h1>MEET YOUR CREW</h1>
            </div>
            <section className='crewInfo'>
                <div>
                    <h3 className='crewRole'>{crew[0].role}</h3>
                    <h1 className='crewName'>{crew[0].name}</h1>
                </div>
            </section>

            <div className='crewDis'>
                
                <div className=''>
                    <h1 className='crewDisText'>{crew[0].bio}</h1>
                </div>
               
            </div>
        </section>
    )
}
