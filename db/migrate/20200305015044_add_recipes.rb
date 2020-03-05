class AddRecipes < ActiveRecord::Migration[5.2]
  def change
    create_table :recipes do |t|
      t.string :title, null: false
      t.string :author_name, null: false
      t.string :description, null: false
      t.integer :servings, null: false
      t.string :min_duration, null: false

      t.timestamps
    end

    create_table :prep_steps do |t|
      t.integer :recipe_id, null: false
      t.integer :step, null: false
      t.string :description, null: false

      t.timestamps
    end

    add_index :prep_steps, :recipe_id
  end
end