class CreateItemTypes < ActiveRecord::Migration[5.1]
  def change
    create_table :item_types, id: :uuid do |t|
      t.string :name
      t.text :description
      t.string :category
      t.timestamps
    end
  end
end
