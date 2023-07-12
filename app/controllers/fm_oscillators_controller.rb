class FmOscillatorsController < ApplicationController
  before_action :set_fm_oscillator, only: %i[ show edit update destroy ]

  # GET /fm_oscillators or /fm_oscillators.json
  def index
    @fm_oscillators = FmOscillator.all
  end

  # GET /fm_oscillators/1 or /fm_oscillators/1.json
  def show
  end

  # GET /fm_oscillators/new
  def new
    @fm_oscillator = FmOscillator.new
  end

  # GET /fm_oscillators/1/edit
  def edit
  end

  # POST /fm_oscillators or /fm_oscillators.json
  def create
    @fm_oscillator = FmOscillator.new(fm_oscillator_params)

    respond_to do |format|
      if @fm_oscillator.save
        format.html { redirect_to fm_oscillator_url(@fm_oscillator), notice: "Fm oscillator was successfully created." }
        format.json { render :show, status: :created, location: @fm_oscillator }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @fm_oscillator.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /fm_oscillators/1 or /fm_oscillators/1.json
  def update
    respond_to do |format|
      if @fm_oscillator.update(fm_oscillator_params)
        format.html { redirect_to fm_oscillator_url(@fm_oscillator), notice: "Fm oscillator was successfully updated." }
        format.json { render :show, status: :ok, location: @fm_oscillator }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @fm_oscillator.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /fm_oscillators/1 or /fm_oscillators/1.json
  def destroy
    @fm_oscillator.destroy

    respond_to do |format|
      format.html { redirect_to fm_oscillators_url, notice: "Fm oscillator was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_fm_oscillator
      @fm_oscillator = FmOscillator.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def fm_oscillator_params
      params.fetch(:fm_oscillator, {})
    end
end
