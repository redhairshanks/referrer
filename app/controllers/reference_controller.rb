class ReferenceController < ApplicationController

	before_action :authenticate_user

	def show
		@references = UserReference.where(user: @current_user)
		render
	end


	def add
		if params[:email].present? && Utils::StringUtility.is_email?(params[:email])
			is_ref = UserReference.find_by(email: params[:email], user: @current_user)
			if is_ref.present?
				error_handler({reference: ["Reference already added"]}, :bad_request)
			else
				ref = UserReference.new 
				ref.email = params[:email]
				ref.user = @current_user
				ref.save
				if ref.present? && ref.errors.blank?
					ReferenceMailer.with(reference: ref, referrer: ref.user).new_reference_mail.deliver
					success_handler({email: ref.email, active: ref.active}, nil)
				else
					error_handler({reference: ref.errors.messages}, :bad_request)	
				end
			end
		else
			error_handler({reference: ["Email not found/invalid"]}, :bad_request)
		end
	end

end