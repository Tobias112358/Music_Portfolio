import PropTypes from 'prop-types';
import React, { useState } from 'react';
import './MusicPortfolio.css';
import style from './MusicPortfolio.module.css';
import ChangeRelease from './ChangeRelease.js';

const MusicPortfolio = (props) => {
  return (
    <div className={style.test2}>
      <h3>Music</h3>
      <h1 className="text-3xl font-bold underline">TESTing</h1>
      <hr />
      <ChangeRelease soundcloud_id={props.soundcloud_id} spotify_id={props.spotify_id} youtube_id={props.youtube_id} release_id={props.release_id}/>
    </div>
  );
};

MusicPortfolio.propTypes = {
  release_name: PropTypes.string.isRequired, // this is passed from the Rails view
};

export default MusicPortfolio;
