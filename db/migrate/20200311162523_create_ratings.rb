class CreateRatings < ActiveRecord::Migration[5.2]
  def change
    create_table :ratings do |t|
      t.integer :recipe_id, null: false
      t.integer :user_id, null: false
      t.string :star_rating, null: false

      t.timestamps
    end

    add_index :ratings, [:user_id, :recipe_id], unique: true

  end
end
