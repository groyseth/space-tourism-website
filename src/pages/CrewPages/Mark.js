import React from 'react'
import { crew } from "../../data"
import pic from "../../assets/crew/image-mark-shuttleworth.png"
import "../../css/crew/crew.css"
export default function Mark() {
    return (
        <section className='navPlanets'>
           
            
            <img src={pic} alt="" className="crewPic" />

            <div className='pickDest'>
                <h1 className='pickDestNum'>02</h1> <h1>MEET YOUR CREW</h1>
            </div>
            <section className='crewInfo'>
                <div>
                    <h3 className='crewRole'>{crew[1].role}</h3>
                    <h1 className='crewName'>{crew[1].name}</h1>
                </div>
            </section>

            <div className='crewDis'>
                
                <div className=''>
                    <h1 className='crewDisText'>{crew[1].bio}</h1>
                </div>
               
            </div>
        </section>
    )
}