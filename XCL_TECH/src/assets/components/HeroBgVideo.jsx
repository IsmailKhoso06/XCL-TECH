import React from 'react'

function HeroBgVideo() {

    const VideoStyles = {
       width:"100%",
       position:"absolute",
       top:"-100px",
       zIndex:"-1"
    }

  return (
    <div>
      <video src='./public/HeroVideo.mp4' loop autoPlay muted style={VideoStyles} ></video>
    </div>
  )
}
 
export default HeroBgVideo
