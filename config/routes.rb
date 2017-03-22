Rails.application.routes.draw do
  namespace :director do
    resources :shops

    resources :malls

    resources :items

    resources :colors

    get 'pictures/trash'
    resources :pictures

    resources :brands

    get 'dashboard' => 'dashboard#index'
    get '/' => 'dashboard#index'
  end

  root 'shopeper#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
