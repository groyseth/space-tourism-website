import React from 'react'
import "../css/home.scss"
import image from "../assets/home/Group.png"
export default function Home() {
  return (
    <div className='backGround' id='home'>

      {/* <NavTabs /> */}

      <section className='mainText' >
        <div className='header'>SO, YOU WANT TO TRAVEL TO</div>
        <h1>SPACE</h1>
        <p>Let’s face it; if you want to go to space, you might as well genuinely go to
          outer space and not hover kind of on the edge of it. Well sit back, and relax
          because we’ll give you a truly out of this world experience!
        </p>
      </section>
      {/* <div className='cirlceDiv'>
        <h1 className='explore' onClick={() => window.location.replace("#Destonation")}  >EXPLORE</h1>
      </div> */}
    
      
      
    </div>
  )
}
