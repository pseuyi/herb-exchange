# == Schema Information
#
# Table name: users
#
#  id              :uuid             not null, primary key
#  username        :string
#  password_digest :string
#  name            :string
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
