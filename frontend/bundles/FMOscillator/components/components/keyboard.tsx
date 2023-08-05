import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import '../../../../css/application.css'
import {StartSequence, StopSequence} from './sequencer'

// midi note number to frequency conversion 
function mtof(m:number):any {
    return Math.pow(2, (m - 69) / 12) * 440;
  }

const setSequenceStep = (fm:any, midiNote:number, sequenceMode:any, setSequenceMode:any, step:any, setStep:any, wasm:any) => {
    if (fm) {
        fm.set_sequence_step(parseInt(mtof(midiNote)), step-1);
        setStep(step+1);
      }
      if(step==16 && sequenceMode) {
        setSequenceMode(false);
        if(fm.toggle_sequencer_mode()) {
            //wasm.start_sequence(fm);
            //fm.start_sequence();
            StartSequence(fm);
            setStep("-");
        }
      }
      return fm;
}

const setFrequency = (fm:any, midiNote:any) => {
    if (fm) {
        fm.set_note(parseInt(midiNote));
      }
      return fm;
}

const WhiteKey = (props:any) => {

    var clickFunction:any;
    if(props.sequenceMode){
        clickFunction = setSequenceStep
    }
    else {
        clickFunction = setFrequency
    }

    return (
        <div className="bg-white border-slate-500 border-2" onClick={() => {props.setFM(clickFunction(props.fm, props.midiNote, props.sequenceMode, props.setSequenceMode, props.step, props.setStep, props.wasm))}}>
        </div>
    )
}

const BlackKey = (props:any) => {
    var clickFunction:any;
    if(props.sequenceMode){
        clickFunction = setSequenceStep
    }
    else {
        clickFunction = setFrequency
    }

    return (
        <div className="bg-black border-slate-500 border-2" onClick={() => {props.setFM(clickFunction(props.fm, props.midiNote, props.sequenceMode, props.setSequenceMode, props.step, props.setStep, props.wasm))}}>
        </div>
    )
}


const Keyboard = (props:any) => {

  const [name, setName] = useState(props.name);
  const [fm] = useState(props.fm);
  const [transpose, setTranspose] = useState(0);
  const [sequenceMode, setSequenceMode] = useState(false);
  const [step, setStep] = useState<string | number>("-");

  const toggleSequenceMode = () => {
  };

  useEffect(() => {

    if(sequenceMode) {
        if(typeof(step) === "string")
            setStep(1);
    } else {
        setStep("-");
    }
  });
  
    return(
        <div className="bg-slate-800">
            <div className="bg-black text-yellow-200 text-2xl">
                <p>Step: {step}</p>
            </div>
            <div className="w-full bg-slate-700 grid grid-cols-3 text-2xl text-white p-1">
                <input className="border-spacing-5 border-blue-900 border-8 p-4 m-1" type="button" value="up" onClick={() => {setTranspose(transpose + 12)}}/>
                <input className="border-spacing-5 border-blue-900 border-8 p-4 m-1" type="button" value="down" onClick={() => {setTranspose(transpose - 12)}}/>
                <input className={sequenceMode ? "border-spacing-5 border-red-900 border-8 p-4 m-1" : "border-spacing-5 border-blue-900 border-8 p-4 m-1"} type="button" value="sequenceMode" onClick={() => {setSequenceMode(!sequenceMode);}}/>
            </div>
            <div className="m-10 grid grid-cols-12 h-52 grid-rows-1">
                <WhiteKey fm={props.fm} setFM={props.setFM} midiNote={60 + transpose} sequenceMode={sequenceMode} setSequenceMode={setSequenceMode} step={step} setStep={setStep} wasm={props.wasm} />
                <BlackKey fm={props.fm} setFM={props.setFM} midiNote={61 + transpose} sequenceMode={sequenceMode} setSequenceMode={setSequenceMode} step={step} setStep={setStep} wasm={props.wasm} />
                <WhiteKey fm={props.fm} setFM={props.setFM} midiNote={62 + transpose} sequenceMode={sequenceMode} setSequenceMode={setSequenceMode} step={step} setStep={setStep} wasm={props.wasm} />
                <BlackKey fm={props.fm} setFM={props.setFM} midiNote={63 + transpose} sequenceMode={sequenceMode} setSequenceMode={setSequenceMode} step={step} setStep={setStep} wasm={props.wasm} />
                <WhiteKey fm={props.fm} setFM={props.setFM} midiNote={64 + transpose} sequenceMode={sequenceMode} setSequenceMode={setSequenceMode} step={step} setStep={setStep} wasm={props.wasm} />
                <WhiteKey fm={props.fm} setFM={props.setFM} midiNote={65 + transpose} sequenceMode={sequenceMode} setSequenceMode={setSequenceMode} step={step} setStep={setStep} wasm={props.wasm} />
                <BlackKey fm={props.fm} setFM={props.setFM} midiNote={66 + transpose} sequenceMode={sequenceMode} setSequenceMode={setSequenceMode} step={step} setStep={setStep} wasm={props.wasm} />
                <WhiteKey fm={props.fm} setFM={props.setFM} midiNote={67 + transpose} sequenceMode={sequenceMode} setSequenceMode={setSequenceMode} step={step} setStep={setStep} wasm={props.wasm} />
                <BlackKey fm={props.fm} setFM={props.setFM} midiNote={68 + transpose} sequenceMode={sequenceMode} setSequenceMode={setSequenceMode} step={step} setStep={setStep} wasm={props.wasm} />
                <WhiteKey fm={props.fm} setFM={props.setFM} midiNote={69 + transpose} sequenceMode={sequenceMode} setSequenceMode={setSequenceMode} step={step} setStep={setStep} wasm={props.wasm} />
                <BlackKey fm={props.fm} setFM={props.setFM} midiNote={70 + transpose} sequenceMode={sequenceMode} setSequenceMode={setSequenceMode} step={step} setStep={setStep} wasm={props.wasm} />
                <WhiteKey fm={props.fm} setFM={props.setFM} midiNote={71 + transpose} sequenceMode={sequenceMode} setSequenceMode={setSequenceMode} step={step} setStep={setStep} wasm={props.wasm} />
            </div>
        </div>
    );
}

Keyboard.propTypes = {
  name: PropTypes.string.isRequired, 
  fm: PropTypes.any, 
  setFM: PropTypes.any, 
  wasm: PropTypes.any, 
};

export default Keyboard;