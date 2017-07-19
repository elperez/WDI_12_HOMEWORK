Rails.application.routes.draw do

  # get '/articles', to: 'articles#index'

  resources :articles, :comments

  get '/api/comments/:id', to: 'api/comments#show'

  get '/api/articles/:id', to: 'api/articles#show'

  get 'api/stuff', to: 'articles#stuff'

end
