class CreateMarkets < ActiveRecord::Migration[5.1]
  def change
    create_table :markets do |t|
      t.uuid :uuid
      t.string :name
      t.text :description

      t.timestamps
    end
  end
end
