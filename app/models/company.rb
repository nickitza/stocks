class Company < ApplicationRecord
  has_many :records, dependent: :destroy
end
