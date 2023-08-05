import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import ChangeRelease from './components/ChangeRelease';
import '../../../css/application.css'

const MusicPortfolio = (props:any) => {

  const [wasm, setWasm] = useState<any>();

  useEffect(() => {
    loadWasm();
  });

  var loadWasm = async () => {
    try {
      setWasm(await import('hello-wasm'));
    } catch(err) {
      console.error(`Unexpected error in loadWasm. [Message: ${err.message}]`);
    }
  };

  return (
    <div className="text-6xl font-['knewaveregular'] text-center text-white bg-[url('../images/glitchy_background.jpg')] bg-cover h-screen">
      <h3 className="text-red-500 bg-gradient-to-b from-black to-transparent py-10">Music</h3>
      <br />
      <input type="button" id="lname" name="lname" className="border border-amber-800 bg-origin-padding rounded-s-xl w-40 py-3 bg-amber-700 hover:bg-amber-900 hover:opacity-70 ease-in-out duration-1000 backdrop-blur-md float-right text-xl" onClick={async () => {wasm.greet("toby")}}/>
      <input type="button" id="lname" name="lname" className="border border-emerald-800 bg-origin-padding rounded-e-xl w-40 py-3 bg-emerald-700 hover:bg-emerald-900 hover:opacity-70 ease-in-out duration-1000 backdrop-blur-md float-left text-xl" onClick={
        async () => {
          wasm.play_song()
        }
        }/>
      <br />
      <ChangeRelease soundcloud_id={props.soundcloud_id} spotify_id={props.spotify_id} youtube_id={props.youtube_id} release_id={props.release_id} release_name={props.release_name}/>
    </div>
    
  );
};

MusicPortfolio.propTypes = {
  release_name: PropTypes.string.isRequired, // this is passed from the Rails view
};

export default MusicPortfolio;
