require "application_system_test_case"

class FmOscillatorsTest < ApplicationSystemTestCase
  setup do
    @fm_oscillator = fm_oscillators(:one)
  end

  test "visiting the index" do
    visit fm_oscillators_url
    assert_selector "h1", text: "Fm oscillators"
  end

  test "should create fm oscillator" do
    visit fm_oscillators_url
    click_on "New fm oscillator"

    click_on "Create Fm oscillator"

    assert_text "Fm oscillator was successfully created"
    click_on "Back"
  end

  test "should update Fm oscillator" do
    visit fm_oscillator_url(@fm_oscillator)
    click_on "Edit this fm oscillator", match: :first

    click_on "Update Fm oscillator"

    assert_text "Fm oscillator was successfully updated"
    click_on "Back"
  end

  test "should destroy Fm oscillator" do
    visit fm_oscillator_url(@fm_oscillator)
    click_on "Destroy this fm oscillator", match: :first

    assert_text "Fm oscillator was successfully destroyed"
  end
end
