import React from 'react'
import '../App.css'
import video from '../videos/base-work.webm'
import videomd from '../videos/markdown.webm'
import videono from '../videos/notion.webm'
import videoi from '../videos/imdb.webm'
import videoy from '../videos/chartjs.webm'
import videos from '../videos/sketch.webm'
import videow from '../videos/weather.webm'
import videoa from '../videos/ads.webm'
import videop from '../videos/poke.webm'

const project = () => {
  return (
    <div className='updated-project'>
    <h2>My Work</h2>
    <div className='wrapper-class'>
    <div className='wrapper-container'>
    <div className='project'>
    <video  src={video} autoPlay muted loop playsInline controls={false}></video>
    </div>
    <div className='project-marker'>
    <video  src={videomd} autoPlay muted loop playsInline controls={false}></video>
    </div>
    <div className='project-start'>
    <video  src={videono} autoPlay muted loop playsInline controls={false}></video>
    </div>
    <div className='project-imdb'>
    <video  src={videoi} autoPlay muted loop playsInline controls={false}></video>
    </div>
    <div className='project-you'>
    <video  src={videoy} autoPlay muted loop playsInline controls={false}></video>
    </div>
    <div className='project-sketch'>
    <video  src={videos} autoPlay muted loop playsInline controls={false}></video>
    </div>
    <div className='project-weather'>
    <video  src={videow} autoPlay muted loop playsInline controls={false}></video>
    </div>
    <div className='project-ads'>
    <video  src={videoa} autoPlay muted loop playsInline controls={false}></video>
    </div>
    <div className='project-poke'>
    <video  src={videop} autoPlay muted loop playsInline controls={false}></video>
    </div>
    </div>
    </div>
    </div>
  )
}

export default project
