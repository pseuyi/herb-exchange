class CreateTransactions < ActiveRecord::Migration[5.1]
  def change
    create_table :transactions do |t|
      t.integer :price
      t.references :seller, polymorphic: true, index: {name: "index_by_seller"}
      t.references :buyer, polymorphic: true, index: {name: "index_by_buyer"}
      t.belongs_to :item, index: true
      t.timestamps
    end
  end
end
