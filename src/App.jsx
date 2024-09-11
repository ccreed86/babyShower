import { useState } from 'react'
import InvitationExample from './assets/InvitationExample.jpg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <>
      <div>
        <img src={InvitationExample} className="logo"/>
      </div>
      <h2>You're Invited!</h2>
      <h1>Michelle & Chris's Baby Shower</h1>
      <h3>October 19th, 2024 1:30pm - 4:00pm</h3>
      <h3 className='address'> <a href="https://www.google.com/maps/dir//610+Mission+Canyon+Rd,+Santa+Barbara,+CA+93105/@34.4408234,-119.7949926,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x80e914962d226909:0x22488839f24d2a5e!2m2!1d-119.7125914!2d34.440851?entry=ttu&g_ep=EgoyMDI0MDkwOS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">Rocky Nook Park<br/>
        610 Mission Canyon Rd, Santa Barbara, CA 93105<br/>
        Area 1</a></h3>
      <h2>RSVP with Mallory by text or email</h2>
      <h2>Registries</h2>
      <h3><a href="https://www.target.com/gift-registry/gift-giver?registryId=b8044520-6d7a-11ef-8481-d50f54ea90e9&type=BABY" target="_blank" rel="noopener noreferrer">Target</a></h3>
      <h3><a href="https://www.amazon.com/baby-reg/michelle-silva-february-2025-sandiego/2QEB592L5VNE1" target="_blank" rel="noopener noreferrer">Amazon</a></h3>
    </>   
  )
}

export default App
