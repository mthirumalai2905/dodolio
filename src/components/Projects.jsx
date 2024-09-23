import React from 'react';
import '../App.css';
import video from '../videos/base-work.webm';
import videomd from '../videos/markdown.webm';
import videono from '../videos/notion.webm';
import videoi from '../videos/imdb.webm';
import videoy from '../videos/chartjs.webm';
import videos from '../videos/sketch.webm';
import videow from '../videos/weather.webm';
import videoa from '../videos/ads.webm';
import videop from '../videos/poke.webm';
import videok from '../videos/kanban.webm';
import videoty from '../videos/typify.webm';
import videopot from '../videos/port.webm';


const Project = () => {
  return (
    <div className='updated-project'>
      <h2>My Work</h2>
      <div className='wrapper-class'>
        <div className='wrapper-container'>
          <div className='project'>
            <video src={video} autoPlay muted loop playsInline controls={false}></video>
          </div>
          <div className='project'>
            <video src={videomd} autoPlay muted loop playsInline controls={false}></video>
          </div>
          <div className='project'>
            <video src={videono} autoPlay muted loop playsInline controls={false}></video>
          </div>
          <div className='project'>
            <video src={videoi} autoPlay muted loop playsInline controls={false}></video>
          </div>
          <div className='project'>
            <video src={videoy} autoPlay muted loop playsInline controls={false}></video>
          </div>
          <div className='project'>
            <video src={videos} autoPlay muted loop playsInline controls={false}></video>
          </div>
          <div className='project'>
            <video src={videow} autoPlay muted loop playsInline controls={false}></video>
          </div>
          <div className='project'>
            <video src={videoa} autoPlay muted loop playsInline controls={false}></video>
          </div>
          <div className='project'>
            <video src={videop} autoPlay muted loop playsInline controls={false}></video>
          </div>
          <div className='project'>
            <video src={videok} autoPlay muted loop playsInline controls={false}></video>
          </div>
          <div className='project'>
            <video src={videoty} autoPlay muted loop playsInline controls={false}></video>
          </div>
          <div className='project'>
            <video src={videopot} autoPlay muted loop playsInline controls={false}></video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
