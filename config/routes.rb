Rails.application.routes.draw do
  devise_for :users
  root 'application#index'
  resource :history, :controller => 'history', defaults: {format: :json}
end
