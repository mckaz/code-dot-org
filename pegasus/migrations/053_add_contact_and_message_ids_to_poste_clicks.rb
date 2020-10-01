Sequel.migration do
  up do

    create_table(:poste_clicks, charset: 'utf8') do
      primary_key :id
      foreign_key :url_id, :poste_urls, index: true, null: false
      Integer :delivery_id, index: true, null: false
      DateTime :created_at, null: false
      String :created_ip, size: 50, null: false
    end


    
    add_column :poste_clicks, :contact_id, Integer, null: false
    add_index :poste_clicks, :contact_id
    add_column :poste_clicks, :message_id, Integer, null: false
    add_index :poste_clicks, :message_id
  end

  down do
    drop_column :poste_clicks, :contact_id
    drop_column :poste_clicks, :message_id
    drop_table(:poste_clicks)
  end
end
