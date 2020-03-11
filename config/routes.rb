Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resources :recipes, only: [:index, :show] do
      post 'save'
      delete 'unsave'
      resources :comments, only: [:create]
      resources :ratings, only: [:create]
    end
    resources :comments, only: [:destroy]
    resources :ratings, only: [:update, :destroy]
    resource :session, only: [:create, :destroy]
  end

  root "static_pages#root"
end