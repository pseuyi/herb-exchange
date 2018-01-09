class Item < ApplicationRecord
  belongs_to :collectible, polymorphic: true
  belongs_to :item_type
end
