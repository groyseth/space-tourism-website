import React from 'react'
import { crew } from "../../data"
import pic from "../../assets/crew/image-victor-glover.png"
import "../../css/crew/crew.scss"
export default function Victor() {
    return (
        <section className='navPlanets'>
           
            
            <img src={pic} alt="" className="crewPic" />

            <div className='pickCrew'>
                <h1 className='pickDestNum'>02</h1> <h1>MEET YOUR CREW</h1>
            </div>
            <section className='crewInfo'>
                <div>
                    <h3 className='crewRole'>{crew[2].role}</h3>
                    <h1 className='crewName'>{crew[2].name}</h1>
                </div>
            </section>

            <div className='crewDis'>
                
                <div className=''>
                    <h1 className='crewDisText'>{crew[2].bio}</h1>
                </div>
               
            </div>
        </section>
    )
}