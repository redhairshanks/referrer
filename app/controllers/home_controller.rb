class HomeController < ApplicationController 
	
	def index
		render
	end

	def sign_up
		render
	end


	def sign_in_by_email
		if params[:email].present? && params[:password].present?
	        if Utils::StringUtility.is_email?(params[:email])
	          	user = User.find_by(email: params[:email])
	          	if user.present?
	             	if user.authenticate(params[:password])
	                	success_handler({session_id: User.create_session(user)}, nil)
	              	else
	                	error_handler({password: ["Incorrect password"]}, :forbidden)
	              	end
	          	else
	            	error_handler({user: ["Not found"]})
	          	end
	        else
	          error_handler({email: ["Invalid email"]})
	        end
	    else
	    	error_handler({user: ["Email/Password not found"]}, :bad_request)
	    end
	end


	def register_with_email
		if params[:name].present? && params[:email].present? && params[:password].present?
			is_user = User.find_by(email: params[:email])
			if is_user.present?
				error_handler({user: ["User already registered"]}, :bad_request)
			else
				is_user = User.create(params.permit(:name, :email, :password))
				if is_user.present?
					activate_user_reference(is_user)
					success_handler({session_id: User.create_session(is_user)}, nil)
				else
					error_handler({user: is_user.errors.messages}, :bad_request)		
				end
			end
		else
			error_handler({user: ["Name/Email/Password not found"]}, :bad_request)
		end
	end


	private

	def activate_user_reference(user)
		refs = UserReference.where(email: user.email)
		if refs.present?
			refs.update_all(active: "Yes")
		end
	end


end