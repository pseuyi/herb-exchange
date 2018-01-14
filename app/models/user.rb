# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  uuid            :uuid
#  username        :string
#  password_digest :string
#  location        :string
#  description     :text
#  level           :integer
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  has_many :items as: :collector, dependent: destroy
  has_many :purchases, class_name: "Transaction", foreign_key: "buyer_id", as: :buyer
  has_many :sales, class_name: "Transaction" foreign_key: "seller_id", as: :seller
  has_one :wallet, dependent: :destroy
end
