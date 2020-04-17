class RecipeSave < ApplicationRecord
  validates :recipe_id, :user_id, presence: true
  validates :recipe_id, uniqueness: { scope: :user_id, message: 'recipe already saved.'}

  belongs_to :user, foreign_key: :user_id, class_name: :User
  belongs_to :recipe, foreign_key: :recipe_id, class_name: :Recipe
end