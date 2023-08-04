const StartSequence = async (fm) => {
    if(fm) {
      fm.next_step();
      await new Promise(r => setTimeout(r, (30000/fm.get_tempo())));
      StartSequence(fm);
    }
  }

  const StopSequence = async (fm) => {
    if(fm) {
      fm.next_step();
      await new Promise(r => setTimeout(r, (30000/fm.get_tempo())));
      StartSequence(fm);
    }
  }

export {StartSequence, StopSequence};