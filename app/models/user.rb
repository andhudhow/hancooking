class User < ApplicationRecord
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }, presence: true, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: true

  has_many :recipe_saves, foreign_key: :user_id, class_name: :RecipeSave
  has_many :saved_recipes, through: :recipe_saves, source: :recipe
  has_many :comments, foreign_key: :user_id, class_name: :Comment
  has_many :ratings, foreign_key: :user_id, class_name: :Rating
  has_many :rated_recipes, through: :ratings, source: :recipe

  has_one_attached :avatar

  after_initialize :ensure_session_token

  attr_reader :password

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    user && user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = generate_unique_session_token
    self.save!
    self.session_token
  end

  private

  def ensure_session_token
    self.session_token ||= generate_unique_session_token
  end
  
  def generate_unique_session_token
    SecureRandom.urlsafe_base64(16)
  end

end