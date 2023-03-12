class CreateUserReferences < ActiveRecord::Migration[7.0]
  def change
    create_table :user_references do |t|
      t.string :email
      t.string :active
      t.belongs_to :user, foreign_key: true
      t.timestamps
    end
  end
end
