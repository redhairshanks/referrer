# Preview all emails at http://localhost:3000/rails/mailers/reference_mailer
class ReferenceMailerPreview < ActionMailer::Preview
	def new_reference_mail
		referrer = User.new(email: "pravinpatil@gmail.com", name: "Pravin Patil")
		reference = UserReference.new(email: "jenniferlawrence@gmail.com", user: referrer)

		ReferenceMailer.with(reference: reference, referrer: referrer).new_reference_mail
	end
end
