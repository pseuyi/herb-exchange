# == Schema Information
#
# Table name: item_types
#
#  id          :integer          not null, primary key
#  uuid        :uuid
#  name        :string
#  description :text
#  category    :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class ItemType < ApplicationRecord
  has_many :items
end
