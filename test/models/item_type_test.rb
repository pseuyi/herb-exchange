# == Schema Information
#
# Table name: item_types
#
#  id                 :uuid             not null, primary key
#  name               :string
#  description        :text
#  category           :string
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  image_file_name    :string
#  image_content_type :string
#  image_file_size    :integer
#  image_updated_at   :datetime
#

require 'test_helper'

class ItemTypeTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
