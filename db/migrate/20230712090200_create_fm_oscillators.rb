class CreateFmOscillators < ActiveRecord::Migration[7.0]
  def change
    create_table :fm_oscillators do |t|

      t.timestamps
    end
  end
end
