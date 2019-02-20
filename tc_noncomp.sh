git checkout nondep
cd dashboard
RUBYOPT=W0 rails runner 'typecheck.rb'
cd ../
git checkout staging
