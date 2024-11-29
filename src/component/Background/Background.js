import React from 'react'
import './Background.css'

const Background = () => {
  return (
    <div>
         <video autoPlay loop muted playsInline className='video2'>
        <source src='Assets/bg_phone.mp4' type='video/mp4' />
      </video>
      <video autoPlay loop muted playsInline className='video1'>
        <source src='Assets/bg_desktop.mp4' type='video/mp4' />
      </video>
    </div>
  )
}

export default Background