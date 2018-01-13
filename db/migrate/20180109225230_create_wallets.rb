class CreateWallets < ActiveRecord::Migration[5.1]
  def change
    create_table :wallets do |t|
      t.float :balance
      t.belongs_to :user, index: { unique: true }
      t.timestamps
    end
  end
end
