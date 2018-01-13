class CreateItems < ActiveRecord::Migration[5.1]
  def change
    create_table :items do |t|
      t.integer :price
      t.string :status
      t.references :collector, polymorphic: true, index: true
      t.belongs_to :item_type, index: true
      t.timestamps
    end
  end
end
