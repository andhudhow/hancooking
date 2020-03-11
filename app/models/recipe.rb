class Recipe< ApplicationRecord
  validates :title, :author_name, :servings, :min_duration, presence: true
  
  has_many :ingredients, foreign_key: :recipe_id, class_name: :Ingredient
  has_many :prep_steps, foreign_key: :recipe_id, class_name: :PrepStep
  has_many :comments, foreign_key: :recipe_id, class_name: :Comment
  has_many :recipe_saves, foreign_key: :recipe_id, class_name: :RecipeSave
  has_many :users_saved, through: :recipe_saves, source: :user
  has_many :ratings, foreign_key: :recipe_id, class_name: :Rating
  

  has_one_attached :photo

  def avg_rating
    sum = 0
    num_ratings = ratings.length

    ratings.each do |rating|
      sum += rating.star_rating
    end

    (sum / num_ratings).round
  end

  def num_ratings
    ratings.length
  end

end