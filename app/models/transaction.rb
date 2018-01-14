# == Schema Information
#
# Table name: transactions
#
#  id          :integer          not null, primary key
#  price       :integer
#  seller_type :string
#  seller_id   :integer
#  buyer_type  :string
#  buyer_id    :integer
#  item_id     :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Transaction < ApplicationRecord
  belongs_to :seller, polymorphic: true
  belongs_to :buyer, polymorphic: true
  belongs_to :item
end
