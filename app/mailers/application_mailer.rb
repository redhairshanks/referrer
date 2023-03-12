class ApplicationMailer < ActionMailer::Base
  default from: "automated@postmaster.mails.unofin.in"
  layout "mailer"
end
