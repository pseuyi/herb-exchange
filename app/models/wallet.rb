# == Schema Information
#
# Table name: wallets
#
#  id         :integer          not null, primary key
#  balance    :float
#  user_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Wallet < ApplicationRecord
  belongs_to :user
end
