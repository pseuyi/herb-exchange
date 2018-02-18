class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    enable_extension 'pgcrypto'
    create_table :users, id: :uuid do |t|
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
