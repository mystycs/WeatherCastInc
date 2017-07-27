class AddUseridToHistory < ActiveRecord::Migration[5.0]
  def change
    add_column :histories, :user_id, :integer
  end
end
