Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root "home#index"

  # Views
  get  '/sign-up', to: "home#sign_up"
  get  '/references/show', to: "reference#show"
  
  # API's
  post '/api/sign-up', to: "home#register_with_email"
  post '/api/sign-in', to: "home#sign_in_by_email"
  post '/api/add/reference', to: "reference#add"


  

end
