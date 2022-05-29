import React from 'react'
import { technology } from "../../data"
import pic from "../../assets/technology/image-launch-vehicle-portrait.jpg"
import mediaPic from "../../assets/technology/image-launch-vehicle-landscape.jpg"
import "../../css/tech/tech.scss"
export default function Vehical() {
    return (
        <section className='navPlanets'>


            <img src={pic} alt="" className="techPic" />
            <img src={mediaPic} alt="" className='mediaPic' />
            <div className='picTech'>
                <h1 className='pickDestNum'>03</h1> <h1>SPACE LAUNCH 101</h1>
            </div>
            
                <section className='techInfo'>
                    <div>
                        <h3 className='techHeader'>THE TERMINOLOGY…</h3>
                        <h1 className='techName'>{technology[0].name}</h1>
                    </div>
                </section>

                <div className='techDis'>

                    <div className=''>
                        <h1 className='techDisText'>{technology[0].description}</h1>
                    </div>

                </div>
           
        </section>
    )
}