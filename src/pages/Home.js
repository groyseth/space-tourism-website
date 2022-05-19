import React from 'react'
import HomeNav from '../Components/HomeNav'
import "../css/home.css"
import image from "../assets/home/Group 16.png"
export default function Home() {
  return (
    <body className='backGround'>
     {/* <HomeNav /> */}
     <nav className='navMain'>
       <ol className='navHome'>
         <li>00 Home</li>
         <li>01 Crew</li>
       </ol>
     </nav>
     <section className='mainText'>
  <h3>So, you want to travel to</h3>
  <h1>SPACE</h1>
  <p>Let’s face it; if you want to go to space, you might as well genuinely go to 
  outer space and not hover kind of on the edge of it. Well sit back, and relax 
  because we’ll give you a truly out of this world experience!
</p>
  {/* Explore */}
 
  </section>
    </body>
  )
}
