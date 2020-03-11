class UpdateStarRatingType < ActiveRecord::Migration[5.2]
  def change
    change_column :ratings, :star_rating, :integer, using: 'star_rating::integer'
  end
end
