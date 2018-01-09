class Market < ApplicationRecord
  has_many :items as: :collectible
end
