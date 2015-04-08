class AddContactsTable < ActiveRecord::Migration
  def change
      create_table :contacts do |t|
      t.string :firstname
      t.string :lastname
      t.string :phone
      t.string :email
      end
  end
end
