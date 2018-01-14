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

require 'test_helper'

class TransactionTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
