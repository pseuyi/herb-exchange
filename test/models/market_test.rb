# == Schema Information
#
# Table name: markets
#
#  id          :uuid             not null, primary key
#  name        :string
#  description :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

require 'test_helper'

class MarketTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
