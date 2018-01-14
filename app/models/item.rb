# == Schema Information
#
# Table name: items
#
#  id             :integer          not null, primary key
#  price          :integer
#  status         :string
#  collector_type :string
#  collector_id   :integer
#  item_type_id   :integer
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#

class Item < ApplicationRecord
  belongs_to :collector, polymorphic: true
  belongs_to :item_type
  has_many :transactions
end
