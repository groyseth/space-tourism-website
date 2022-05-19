import React from 'react'

import HomeNav from '../Components/HomeNav'
import "../css/home.css"
import image from "../assets/home/Group.png"
export default function Home() {
  return (
    <div className='backGround'>
     {/* <HomeNav /> */}
     <nav className='navMain'>
       <ol className='navHome'>
         <li>00 Home</li>
         <li>01 Destination</li>
         <li>02 Crew</li>
         <li>03 Technology</li>
       </ol>
     </nav>
     <section className='mainText'>
  <h3>SO, YOU WANT TO TRAVEL TO</h3>
  <h1>SPACE</h1>
  <p>Let’s face it; if you want to go to space, you might as well genuinely go to 
  outer space and not hover kind of on the edge of it. Well sit back, and relax 
  because we’ll give you a truly out of this world experience!
</p>
  </section>
  <div>
    <img src={image} alt='cirlce' className='circleImg'></img>
    <h1 className='explore'>Explore</h1>
  </div>
    </div>
  )
}
{/* <Nav.Link href="#features">01 Destination</Nav.Link>
      <Nav.Link href="#pricing">02 Crew</Nav.Link>
      <Nav.Link href="#pricing">03 Technology</Nav.Link> */}