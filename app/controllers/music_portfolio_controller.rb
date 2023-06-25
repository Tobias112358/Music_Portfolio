class MusicPortfolioController < ApplicationController
    layout "music_portfolio"

    def index
      @music_portfolio_props = changeReleaseMain(1)
    end

    private
    def changeReleaseMain(_id)
      _release_name = MusicRelease.find_by(id: 1).name
      _youtube_id = MusicRelease.find_by(id: 1).youtube_id
      _spotify_id = MusicRelease.find_by(id: 1).spotify_id
      _soundcloud_id = MusicRelease.find_by(id: _id).soundcloud_id
      return { release_name: _release_name , release_id: _id, youtube_id: _youtube_id, spotify_id: _spotify_id, soundcloud_id: _soundcloud_id}
    end


    public
    def changeRelease
      _id = params[:id]
      puts(_id)
      if _id === 0
        _id = MusicRelease.last.id
      elsif ! MusicRelease.exists?(id: _id)
        _id = 1
      end

      puts(_id)
      _release_name = MusicRelease.find_by(id: _id).name
      _youtube_id = MusicRelease.find_by(id: _id).youtube_id
      _spotify_id = MusicRelease.find_by(id: _id).spotify_id
      _soundcloud_id = MusicRelease.find_by(id: _id).soundcloud_id

      @music_portfolio_props = { release_name: _release_name , release_id: _id, youtube_id: _youtube_id, spotify_id: _spotify_id, soundcloud_id: _soundcloud_id}
      
      render json: @music_portfolio_props
    end
end
