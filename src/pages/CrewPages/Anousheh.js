import React from 'react'
import { crew } from "../../data"
import pic from "../../assets/crew/image-anousheh-ansari.png"
import "../../css/crew/crew.scss"
export default function Mark() {
    return (
        <section className='navPlanets'>

            {/* <div className='border'> */}
                <img src={pic} alt="" className="crewPic"  />
            {/* </div> */}
            <div className='pickCrew'>
                <h1 className='pickDestNum'>02</h1> <h1>MEET YOUR CREW</h1>
            </div>
            <section className='crewInfo'>
                <div>
                    <h3 className='crewRole'>{crew[3].role}</h3>
                    <h1 className='crewName'>{crew[3].name}</h1>
                </div>
            </section>

            <div className='crewDis'>

                <div className=''>
                    <h1 className='crewDisText'>{crew[3].bio}</h1>
                </div>

            </div>
        </section>
    )
}