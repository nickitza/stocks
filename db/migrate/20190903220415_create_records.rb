class CreateRecords < ActiveRecord::Migration[6.0]
  def change
    create_table :records do |t|
      t.string :year
      t.integer :revenue
      t.float :eps
      t.float :book
      t.integer :op_cash
      t.float :roic
      t.float :pe
      t.belongs_to :company, null: false, foreign_key: true

      t.timestamps
    end
  end
end
