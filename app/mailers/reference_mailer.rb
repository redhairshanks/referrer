class ReferenceMailer < ApplicationMailer

	def new_reference_mail
		@reference = params[:reference]
		@referrer = params[:referrer]
		mail(to: @reference.email, subject: "You are invited by #{@referrer.name} to Referrer!")
	end
end
