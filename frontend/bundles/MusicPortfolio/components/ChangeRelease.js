import React, { useState } from 'react';
import style from './MusicPortfolio.module.css';
import './MusicPortfolio.css';
import axios from 'axios';


//
var getRelease = async (_id) => {

  const token = document.querySelector('[name=csrf-token]').content

  axios.defaults.headers.common['X-CSRF-TOKEN'] = token

  return axios.post(`music/release`, {id: _id})
  .then(res => {
    var array = [];
    array.push(res.data.soundcloud_id);
    array.push(res.data.spotify_id);
    array.push(res.data.youtube_id);
    array.push(res.data.release_name);
    array.push(res.data.release_id);
    return array;
  })
}



function NextReleaseButton(props) {
  return(
    <div>
      
      <input type="button" value="Next" onClick={async () => props.onClick(await getRelease(props.release_id + 1))} />

    </div>
  );
}

function PrevReleaseButton(props) {
  return(
    <div>
      
      <input className="text-3xl font-bold underline" type="button" value="Previous" onClick={async () => props.onClick(await getRelease(props.release_id - 1))} />

    </div>
  );
}

function ChangeRelease(props) {

  const [release_name, setReleaseName] = useState(props.release_name);
  const [youtube_id, setYTID] = useState(props.youtube_id);
  const [spotify_id, setSpID] = useState(props.spotify_id);
  const [soundcloud_id, setSCID] = useState(props.soundcloud_id);
  const [release_id, setReleaseID] = useState(props.release_id);

  var clickHandler = (e) => {
    setSCID(e[0]);
    setSpID(e[1]);
    setYTID(e[2]);
    setReleaseName(e[3]);
    setReleaseID(e[4]);
  }

  return(
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <h4>This is {release_name}</h4>
      <form>
        <label className={style.bright} htmlFor="release_name">

        </label>
          <div className={style.test}>
            <iframe width="420" height="315" src={"https://www.youtube.com/embed/"+youtube_id} ></iframe>
          </div>
          <div className={style.test}>
            <iframe width="420" height="352" src={"https://open.spotify.com/embed/track/"+spotify_id+"?utm_source=generator&theme=0"}></iframe>
          </div>
          <div className={style.test}>
            <iframe width="420" height="352" src={"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/"+soundcloud_id+"&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"}></iframe>
          </div>
          <div className={style.test} width="50" >
            <p>{release_id}</p>
            <PrevReleaseButton release_id={release_id} onClick={(e) => clickHandler(e)} />
            <NextReleaseButton release_id={release_id} onClick={(e) => clickHandler(e)} />
          </div>
      </form>
    </div>

  );
}

export default ChangeRelease;
