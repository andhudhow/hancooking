class CreateSavedRecipes < ActiveRecord::Migration[5.2]
  def change
    create_table :saved_recipes do |t|
      t.integer :user_id
      t.integer :recipe_id

      t.timestamps
    end

    add_index :saved_recipes, :user_id
  end
end
