class Comment < ApplicationRecord
  belongs_to :recipe, foreign_key: :recipe_id, class_name: :Recipe
  belongs_to :user, foreign_key: :user_id, class_name: :User

  validates :recipe_id, presence: true
end
