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

require 'test_helper'

class UserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
