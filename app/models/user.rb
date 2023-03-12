class User < ApplicationRecord

  has_secure_password
  has_many :user_references
  validates :email, presence: true, format: { with: URI::MailTo::EMAIL_REGEXP }

  def self.find_by_session(session_id)
    Utils.cache_read(key_session_id(session_id))
  end

  def self.create_session(user, expiry = 3.hours)
    session_id = SecureRandom.hex(24)
    Utils.cache(key_session_id(session_id), {user: user}, expiry)
    session_id
  end

  def self.key_session_id(session_id)
    "user::session::#{session_id}"
  end

end