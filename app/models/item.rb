class Item < ApplicationRecord
  belongs_to :collector, polymorphic: true
  belongs_to :item_type
  has_many :transactions
end
