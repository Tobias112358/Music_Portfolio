import PropTypes from 'prop-types';
import React, { useState } from 'react';
import style from './MusicPortfolio.module.css';
import ChangeRelease from './components/ChangeRelease.js';
import Slider from './components/Slider'
import '../../../css/application.css'

const MusicPortfolio = (props) => {
  return (
    <div className="text-6xl font-['knewaveregular'] text-center text-white bg-[url('../images/glitchy_background.jpg')] bg-cover h-screen">
      <h3 className="text-red-500 bg-gradient-to-b from-black to-transparent py-10">Music</h3>
      <br />
      <ChangeRelease soundcloud_id={props.soundcloud_id} spotify_id={props.spotify_id} youtube_id={props.youtube_id} release_id={props.release_id} release_name={props.release_name}/>
    </div>
  );
};

MusicPortfolio.propTypes = {
  release_name: PropTypes.string.isRequired, // this is passed from the Rails view
};

export default MusicPortfolio;
