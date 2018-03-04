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

class ItemType < ApplicationRecord
  has_many :items
  has_attached_file :image, styles: { medium: "400x400>", thumb: "64x64>" }, default_url: "/images/:style/missing.png"
  validates_attachment :image, presence: true, content_type: { content_type: ["image/jpeg", "image/gif", "image/png"] }
end
