Rails.application.routes.draw do
  get 'hello_world', to: 'hello_world#index'
  
  get 'music', to: 'music_portfolio#index'
  post 'music/release', to: 'music_portfolio#changeRelease'

  root 'hello_world#index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
