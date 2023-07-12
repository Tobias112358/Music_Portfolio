Rails.application.routes.draw do
  resources :fm_oscillators
  get 'hello_world', to: 'hello_world#index'

  get 'fm_oscillators', to: 'fm_oscillators#index'
  
  get 'music', to: 'music_portfolio#index'
  post 'music/release', to: 'music_portfolio#changeRelease'

  root 'fm_oscillators#index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
