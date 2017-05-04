Rails.application.routes.draw do

  devise_for :users
  namespace :director do

    get 'bugs/trash'
    resources :bugs do
      post :add_comment
    end

    get 'stock/trash'
    get 'stock/items'
    resources :stock

    get 'types/trash'
    resources :types

    get 'sizes/trash'
    resources :sizes

    get 'shops/trash'
    resources :shops do
      resources :stock
    end

    get 'malls/trash'
    resources :malls do
      member do
        get :shops
      end
    end

    get 'items/trash'
    resources :items

    get 'colors/trash'
    resources :colors

    get 'pictures/trash'
    resources :pictures

    get 'brands/trash'
    resources :brands

    get 'dashboard' => 'dashboard#index'
    get '/' => 'dashboard#index'
  end

  root 'shopeper#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
