require 'rake'
require "sinatra/activerecord/rake"
require ::File.expand_path('../config/environment', __FILE__)

Rake::Task["db:create"].clear
Rake::Task["db:drop"].clear

# NOTE: Assumes SQLite3 DB
desc "create the database"
task "db:create" do
  touch 'db/db.sqlite3'
end

desc "drop the database"
task "db:drop" do
  rm_f 'db/db.sqlite3'
end

desc 'Retrieves the current schema version number'
task "db:version" do
  puts "Current version: #{ActiveRecord::Migrator.current_version}"
end

desc 'Populate'
task "db:populate" do
  Contact.create(firstname: "Daniel", lastname: "Susetyo", phone: "6047152878", email: "daniel@daniel.com" )
  Contact.create(firstname: "Ben", lastname: "Tem", phone: "6047152878", email: "ben@ben.com" )  
  Contact.create(firstname: "Ben", lastname: "Daniel", phone: "6047152878", email: "ben@ben.com" )  
end
