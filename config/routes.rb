Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resources :recipes, only: [:index, :show] do
      resources :ingredients, only: [:index]
    end
    resource :session, only: [:create, :destroy]
  end

  root "static_pages#root"
end