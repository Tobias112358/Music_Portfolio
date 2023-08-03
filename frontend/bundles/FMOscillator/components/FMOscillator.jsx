import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import style from './FMOscillator.module.css';
import './components/TunerComponent'
import TunerComponent from './components/TunerComponent';
import Keyboard from './components/keyboard';
import '../../../css/application.css'

var isSynthActive = false;


const PlayButton = (props) => {
  var play = (fm, wasm, setTempo) => {
    if (fm === null || fm === undefined) {
      fm = new wasm.FmOsc();
      fm.set_note(50);
      fm.set_fm_frequency(0);
      fm.set_fm_amount(0);
      fm.set_gain(0.8);
      //fm.set_sequence([440.0, 880.0,440.0, 880.0,440.0, 880.0,440.0, 880.0,440.0, 880.0,440.0, 880.0,440.0, 880.0,440.0, 880.0]);
      setTempo(fm.get_tempo());
      //fm.get_midi_access();

      isSynthActive = true;
      //StartSequence(fm);
      
    } else {
      isSynthActive = false;
      fm.free();
      fm = null;
    }
    return fm;
  }

  return(
    <div>
      <input type="button" value="play" onClick={() => {props.setFM(play(props.fm, props.wasm, props.setTempo))}} />
    </div>
  );
}

const StartSequence = (props) => {
  
  var slide = (fm, event) => {
    if (fm) {
      fm.start_sequence();
    }
    return fm;
  }

  return(
    <div>
      <input type="button" value="Start Sequence" onClick={(e) => {props.setFM(slide(props.fm, e))}} />
    </div>
  );
}

const PrimarySlider = (props) => {
  
  var slide = (fm, event) => {
    if (fm) {
      fm.set_note(parseInt(event.target.value));
    }
    return fm;
  }

  return(
    <div>
      <input type="range" min="1" max="100" value="50" onChange={(e) => {props.setFM(slide(props.fm, e))}} />
    </div>
  );
}

const PrimaryGain = (props) => {
  
  var slide = (fm, event) => {
    if (fm) {
      fm.set_gain(parseFloat(event.target.value)/100);
    }
    return fm;
  }

  return(
    <div>
      <input type="range" min="1" max="100" value="50" onChange={(e) => {props.setFM(slide(props.fm, e))}} />
    </div>
  );
}

const FMFrequency = (props) => {
  
  var slide = (fm, event) => {
    if (fm) {
      fm.set_fm_frequency(parseFloat(event.target.value));
    }
    return fm;
  }

  return(
    <div>
      <input type="range" min="1" max="100" value="50" onChange={(e) => {props.setFM(slide(props.fm, e))}} />
    </div>
  );
}

const FMAmount = (props) => {

  var slide = (fm, event) => {
    if (fm) {
      fm.set_fm_amount(parseFloat(event.target.value));
    }
    return fm;
  }

  return(
    <div>
      <input type="range" min="1" max="100" value="50" onChange={(e) => {props.setFM(slide(props.fm, e))}} />
    </div>
  );
}

const LFOAmplitude = (props) => {

  var slide = (fm, event) => {
    if (fm) {
      fm.set_lfo_amplitude(parseFloat(event.target.value/100));
    }
    return fm;
  }

  return(
    <div>
      <input type="range" min="1" max="100" value="50" onChange={(e) => {props.setFM(slide(props.fm, e))}} />
    </div>
  );
}

const LFOFrequency = (props) => {

  var slide = (fm, event) => {
    if (fm) {
      fm.set_lfo_frequency(parseFloat(event.target.value));
    }
    return fm;
  }

  return(
    <div>
      <input type="range" min="1" max="100" value="50" onChange={(e) => {props.setFM(slide(props.fm, e))}} />
    </div>
  );
}

const SetTempo = (props) => {

  var slide = (fm, event) => {
    if (fm) {
      fm.set_tempo(parseFloat(event.target.value));
    }
    return fm;
  }

  return(
    <div>
      <h3>Tempo:</h3>
      <input type="range" min="1" max="240" value="0" onChange={(e) => {props.setFM(slide(props.fm, e)); props.setTempo(props.fm.get_tempo())}} />
    </div>
  );
}

const TempoDisplay = (props) => {
  return(
    <div>
      <h3>Tempo: {props.tempo}</h3>
    </div>
  );
}

const WaveSelect = (props) => {

  var selectWave = (fm, event, componentName) => {
    if (fm) {
      switch(componentName) {
        case "Primary Wave":
          fm.set_primary_oscillator_type(event.target.value);
          break;
        case "FM Wave":
          fm.set_fm_oscillator_type(event.target.value);
          break;
        case "LFO":
          fm.set_lfo_oscillator_type(event.target.value);
          break;
        default:
          return fm;
      }
    }
    return fm;
  }

  return(
    <div>
      <h3>{props.componentName}</h3>
      <ul>
        <li><label htmlFor="sine">Sine: </label><input name="oscillator_type" id="sine" type="radio" value="sine" onChange={(e) => {selectWave(props.fm, e, props.componentName)}} /></li>
        <li><label htmlFor="triangle">Triangle: </label><input name="oscillator_type" id="triangle" type="radio" value="triangle" onChange={(e) => {selectWave(props.fm, e, props.componentName)}} /></li>
        <li><label htmlFor="sawtooth">Sawtooth: </label><input name="oscillator_type" id="sawtooth" type="radio" value="sawtooth" onChange={(e) => {selectWave(props.fm, e, props.componentName)}} /></li>
        <li><label htmlFor="square">Square: </label><input name="oscillator_type" id="square" type="radio" value="square" onChange={(e) => {selectWave(props.fm, e, props.componentName)}} /></li>
      </ul>
    </div>
  );
}

const FMOscillator = (props) => {
  const [name, setName] = useState(props.name);
  const [fm, setFM] = useState(props.fm);
  const [wasm, setWasm] = useState();
  const [sequence, setSequence] = useState(0);
  const [tempo, setTempo] = useState('-');

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
    <div className="" >
      <h3 className="">Osc, {name}!</h3>
      <hr />
      <PlayButton fm={fm} setFM={setFM} wasm={wasm} setTempo={setTempo} />
      <br />
      <div className="grid grid-cols-4 w-full bg-slate-300 text-center">
        <div className="border-2 grid grid-cols-2 m-4" >
          <div className="border-2">
            <PrimaryGain fm={fm} setFM={setFM} />
            <br />
            <PrimarySlider fm={fm} setFM={setFM} />
          </div>
          <WaveSelect fm={fm} setFM={setFM} componentName={"Primary Wave"}/>
        </div>
        
        <div className="border-2" >
          <FMFrequency fm={fm} setFM={setFM} />
          <br />
          <FMAmount fm={fm} setFM={setFM} />
          <br />
          <WaveSelect fm={fm} setFM={setFM} componentName={"FM Wave"}/>
        </div>
        
        <div className="border-2" >

          <LFOFrequency fm={fm} setFM={setFM} />
          <br />
          <LFOAmplitude fm={fm} setFM={setFM} />
          <br />
          <WaveSelect fm={fm} setFM={setFM} componentName={"LFO"}/>
        </div>
        <div className="border-2">
          <SetTempo fm={fm} setFM={setFM} setTempo={setTempo} />
          <br />
          <TempoDisplay tempo={tempo} />
          <br />
          <StartSequence fm={fm} setFM={setFM} setTempo={setTempo} />
          <br/>
        </div>
        <div className="col-span-4">
          <Keyboard name={name} fm={fm} setFM={setFM} wasm={wasm}  />
        </div>
      </div>
      
      
      
    </div>
  );
};

FMOscillator.propTypes = {
  name: PropTypes.string.isRequired, // this is passed from the Rails view
};

export default FMOscillator;
