class FixShit < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :email, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false

      t.timestamps
    end

    create_table :ingredients do |t|
      t.integer :recipe_id, null: false
      t.string :quantity, null: false
      t.string :description, null: false

      t.timestamps
    end

    add_index :users, :email, unique: true
    add_index :ingredients, :recipe_id
  end

end
