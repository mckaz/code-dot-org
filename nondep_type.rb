#require_relative 'db_types'
#require_relative 'orm'
require_relative './shared/middleware/helpers/auth_helpers.rb'
require 'date'

RDL.nowrap ActiveRecord::Associations::ClassMethods
RDL::Globals.info.info['ActiveRecord::Associations::ClassMethods'] = nil

Rails.application.eager_load!







### non-type checked methods
## Sequel
class Table ; end
RDL.type Dashboard, 'self.db', '() -> Sequel::Mysql2::Database', wrap: false
RDL.type Sequel::Mysql2::Database, :[], "(Symbol) -> Table", wrap: false
RDL.type Table, :[], "(Hash<Symbol, %any>) -> Hash<Symbol, %any>", wrap: false









### type checked methods
RDL.type Dashboard, 'self.admin?', '(Integer) -> %bool', typecheck: :later, wrap: true


RDL.do_typecheck :later
