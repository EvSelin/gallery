Rails.application.routes.draw do

  root 'albums#index'

  resources :admin

  resources :albums

  resources :photos

end