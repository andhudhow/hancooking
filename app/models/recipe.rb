class Recipe < ApplicationRecord
  validates :title, :author_name, :servings, :min_duration, presence: true
  
  has_many :ingredients, foreign_key: :recipe_id, class_name: :Ingredient
  has_many :prep_steps, foreign_key: :recipe_id, class_name: :PrepStep
end