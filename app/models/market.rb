# == Schema Information
#
# Table name: markets
#
#  id          :integer          not null, primary key
#  uuid        :uuid
#  name        :string
#  description :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Market < ApplicationRecord
  has_many :items, as: :collector, dependent: :destroy
  has_many :purchases, class_name: "Transaction", foreign_key: "buyer_id", as: :buyer
  has_many :sales, class_name: "Transaction", foreign_key: "seller_id", as: :seller
end
