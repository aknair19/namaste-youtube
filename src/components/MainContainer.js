import React from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'
function MainContainer() {
  return (
    <div className='flex flex-col items-start  space-y-3    '>
    <ButtonList/>
    <VideoContainer/>
    </div>
  )
}

export default MainContainer
