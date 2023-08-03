class FmOscillatorsController < ApplicationController
  layout "fm_oscillator"

  def index
    
    @fm_oscillator_props = { name: "Song osc" , fm: nil , wasm: nil}
  end
end
