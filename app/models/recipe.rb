class Recipe< ApplicationRecord
  validates :title, :author_name, :servings, :min_duration, presence: true
  
  has_many :ingredients, foreign_key: :recipe_id, class_name: :Ingredient
  has_many :prep_steps, foreign_key: :recipe_id, class_name: :PrepStep
  has_many :recipe_saves, foreign_key: :recipe_id, class_name: :RecipeSave
  has_many :users_saved, through: :recipe_saves, source: :user

  has_one_attached :photo

end