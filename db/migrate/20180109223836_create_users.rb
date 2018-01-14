class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.uuid :uuid, index: true
      t.string :username
      t.string :password_digest
      t.string :name
      t.string :location
      t.text :description
      t.integer :level

      t.timestamps
    end
  end
end
