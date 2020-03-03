class Ingredient < ApplicationRecord
  validates :recipe_id, :quantity, :description, presence: true
  belongs_to :recipe, foreign_key: :recipe_id, class_name: :Recipe
end