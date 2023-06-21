class CreateMusicReleases < ActiveRecord::Migration[7.0]
  def change
    create_table :music_releases do |t|
      t.string :name
      t.string :date
      t.string :length
      t.string :youtube_id
      t.string :spotify_id
      t.string :soundcloud_id

      t.timestamps
    end
  end
end
