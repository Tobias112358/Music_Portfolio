import React, { useState } from 'react';
import axios from 'axios';
import '../../../../css/application.css'

//
var getRelease = async (_id:any) => {

  const token = document.querySelector('[name=csrf-token]')?.textContent

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


function NextReleaseButton(props:any) {
  return(
    <div>
      
      <input className="border border-emerald-800 bg-origin-padding rounded-e-xl w-40 py-3 bg-emerald-700 hover:bg-emerald-900 hover:opacity-70 ease-in-out duration-1000 backdrop-blur-md float-left text-xl" type="button" value="Next" onClick={async () => props.onClick(await getRelease(props.release_id + 1))} />

    </div>
  );
}

function PrevReleaseButton(props:any) {
  return(
    <div>
      
      <input className="border border-amber-800 bg-origin-padding rounded-s-xl w-40 py-3 bg-amber-700 hover:bg-amber-900 hover:opacity-70 ease-in-out duration-1000 backdrop-blur-md float-right text-xl" type="button" value="Previous" onClick={async () => props.onClick(await getRelease(props.release_id - 1))} />

    </div>
  );
}

function ChangeRelease(props:any) {

  const [release_name, setReleaseName] = useState(props.release_name);
  const [youtube_id, setYTID] = useState(props.youtube_id);
  const [spotify_id, setSpID] = useState(props.spotify_id);
  const [soundcloud_id, setSCID] = useState(props.soundcloud_id);
  const [release_id, setReleaseID] = useState(props.release_id);

  var clickHandler = (e:any) => {
    setSCID(e[0]);
    setSpID(e[1]);
    setYTID(e[2]);
    setReleaseName(e[3]);
    setReleaseID(e[4]);
  }
  

  return(
    <div className="">
      <div className="my-8 mx-10">
        <h4 className="sticky top-0 z-10">This is {release_name}</h4>
        <form >
          <label htmlFor="release_name">

          </label>
          {soundcloud_id &&
            <div className="inline-table w-full my-10 hover:scale-[1.02] ease-in-out duration-500 sticky top-6 z-10">
              <iframe className="w-full rounded-2xl" src={"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/"+soundcloud_id+"&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"}></iframe>
              <br />
            </div>
          }
          {youtube_id &&
            <div className="z-0 inline-table bg-black w-full h-auto videoWrapper my-10 rounded-2xl hover:scale-[1.02] ease-in-out duration-500">
              <iframe className="rounded-2xl ease-in-out" width="100%" height="100%" src={"https://www.youtube.com/embed/"+youtube_id} ></iframe>
              <br />  
            </div>
          }
          {spotify_id &&
            <div className="inline-table w-50 my-10 hover:scale-[1.02] ease-in-out duration-500">
              <iframe className="w-full" src={"https://open.spotify.com/embed/track/"+spotify_id+"?utm_source=generator&theme=0"}></iframe>
              <br />
            </div>
          }
        </form>
      </div>    
      <div className="grid grid-cols-[1fr_50px_1fr] text-xl absolute bottom-0 content-center w-full bg-gradient-to-t from-black to-transparent" >
        <PrevReleaseButton release_id={release_id} onClick={(e:any) => clickHandler(e)} />
        <p className="border border-fuchsia-800 bg-origin-padding bg-fuchsia-600 backdrop-blur-sm bg-opacity-40 py-3">{release_id}</p>
        <NextReleaseButton release_id={release_id} onClick={(e:any) => clickHandler(e)} />
      </div>
    </div>

  );
}

export default ChangeRelease;
