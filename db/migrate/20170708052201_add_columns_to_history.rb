class AddColumnsToHistory < ActiveRecord::Migration[5.0]
  def change
    add_column :histories, :address, :string
    add_column :histories, :lat, :string
    add_column :histories, :long, :string
  end
end
