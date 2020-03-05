class SavedRecipe < ApplicationRecord
  validates :recipe_id, :user_id, presence: true
  validates :recipe_id, uniqueness: { scope: :user_id }

  belongs_to :user, foreign_key: :user_id, class_name: :User
end