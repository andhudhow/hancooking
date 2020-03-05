class ChangeSavedTableName < ActiveRecord::Migration[5.2]
  def change
    drop_table :saved_recipes
  end
end
