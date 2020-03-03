class RemoveNames < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :first_name, :last_name
  end
end
