require_relative '../../lib/cdo/pegasus'
require_relative '../src/env'
require_relative '../helper_modules/dashboard'
require_relative '../helpers/section_api_helpers'
require_relative '../../shared/middleware/helpers/storage_apps'

# Test setup for unit tests in pegasus folder
require_relative '../../shared/test/common_test_helper'

# allow us to load pages such as /learn, which reference javascript assets,
# without having to precompile dashboard assets first
CDO.pegasus_skip_asset_map = true

# Set up JUnit output for Circle
reporters = [Minitest::Reporters::SpecReporter.new]
if ENV['CIRCLECI']
  reporters << Minitest::Reporters::JUnitReporter.new("#{ENV['CIRCLE_TEST_REPORTS']}/pegasus")
end

## I moved the below to the common_test_helper.rb file, required above.
=begin
if ENV['TYPECHECK']
  raise "GOT HERE"
  puts "Run typechecker here"
  require_relative '../../typecheck.rb'
end
=end
Minitest::Reporters.use! reporters
