cd pegasus/
NODYNCHECK=1 RAILS_ENV=test bundle exec ruby -I.:test -e "ARGV.each{|f| require f}" test/test_section_api_helpers.rb test/test_dashboard.rb
cd ../
