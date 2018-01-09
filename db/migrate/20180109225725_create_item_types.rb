class CreateItemTypes < ActiveRecord::Migration[5.1]
  def change
    create_table :item_types do |t|
      t.uuid :uuid
      t.string :name
      t.text :description
      t.string :category

      t.timestamps
    end
  end
end
