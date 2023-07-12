require "test_helper"

class FmOscillatorsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @fm_oscillator = fm_oscillators(:one)
  end

  test "should get index" do
    get fm_oscillators_url
    assert_response :success
  end

  test "should get new" do
    get new_fm_oscillator_url
    assert_response :success
  end

  test "should create fm_oscillator" do
    assert_difference("FmOscillator.count") do
      post fm_oscillators_url, params: { fm_oscillator: {  } }
    end

    assert_redirected_to fm_oscillator_url(FmOscillator.last)
  end

  test "should show fm_oscillator" do
    get fm_oscillator_url(@fm_oscillator)
    assert_response :success
  end

  test "should get edit" do
    get edit_fm_oscillator_url(@fm_oscillator)
    assert_response :success
  end

  test "should update fm_oscillator" do
    patch fm_oscillator_url(@fm_oscillator), params: { fm_oscillator: {  } }
    assert_redirected_to fm_oscillator_url(@fm_oscillator)
  end

  test "should destroy fm_oscillator" do
    assert_difference("FmOscillator.count", -1) do
      delete fm_oscillator_url(@fm_oscillator)
    end

    assert_redirected_to fm_oscillators_url
  end
end
