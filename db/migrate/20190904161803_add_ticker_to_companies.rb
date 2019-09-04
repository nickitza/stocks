class AddTickerToCompanies < ActiveRecord::Migration[6.0]
  def change
    add_column :companies, :ticker, :string
  end
end
