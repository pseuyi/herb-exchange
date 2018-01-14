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

require 'test_helper'

class ItemTypeTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
