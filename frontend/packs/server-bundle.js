import ReactOnRails from 'react-on-rails';

import HelloWorld from '../bundles/HelloWorld/components/HelloWorldServer';
import MusicPortfolio from '../bundles/MusicPortfolio/components/MusicPortfolioServer';
import FMOscillator from '../bundles/FMOscillator/components/FMOscillatorServer';


// This is how react_on_rails can see the MusicPortfolio in the browser.
ReactOnRails.register({
  MusicPortfolio,
  HelloWorld,
  FMOscillator,
});
