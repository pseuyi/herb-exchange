class AddImageToItemTypes < ActiveRecord::Migration[5.1]
  def up
    add_attachment :item_types, :image
  end

  def down
    remove_attachment :item_types, :image
  end
end
