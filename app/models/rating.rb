class Rating < ApplicationRecord
validates :user_id, :recipe_id, :star_rating, presence: true
validates :star_rating, inclusion: { in: [1,2,3,4,5], message: "must be between 1 and 5" }
belongs_to :user, foreign_key: :user_id, class_name: :User
belongs_to :recipe, foreign_key: :recipe_id, class_name: :Recipe
end