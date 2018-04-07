Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    namespace :v1 do
      resources :users
      resources :item_types
      resources :markets
    end
  end
end
