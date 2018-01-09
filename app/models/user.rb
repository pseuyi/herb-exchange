class User < ApplicationRecord
  has_many :items as: :collectible
  has_many :transactions
end
