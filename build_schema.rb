RDL.nowrap ActiveRecord::Associations::ClassMethods if Object.const_defined?("ActiveRecord")

module RDL::Globals
  # Map from table names (symbols) to their schema types, which should be a Table type
  @seq_db_schema = {}
end

class << RDL::Globals
  attr_accessor :seq_db_schema
end

RDL::Globals.info.info['ActiveRecord::Associations::ClassMethods'] = nil


Rails.application.eager_load! if Object.const_defined?("Rails")


puts "Building schema model for Code.org..."

require 'rails'
def gen_schema(db)
  db.tables.each { |table|
    hash_str = "{ "
    kl_name = table.to_s.camelize.singularize
    db.schema(table).each { |col|
      hash_str << "#{col[0]}: "
      typ = col[1][:type].to_s.camelize
      if typ == "Datetime"
        typ = "DateTime or Time" ## Sequel accepts both
      elsif typ == "Boolean"
        typ = "%bool"
      elsif typ == "Text"
        typ = "String"
      end
      hash_str << "#{typ},"
      RDL.type kl_name, col[0], "() -> #{typ}", wrap: false
      RDL.type kl_name, "#{col[0]}=", "(#{typ}) -> #{typ}", wrap: false
    }
    hash_str.chomp!(",") << " }"
    RDL::Globals.seq_db_schema[table] = RDL::Globals.parser.scan_str "#T #{hash_str}"
  }
end

gen_schema(DASHBOARD_DB)
gen_schema(PEGASUS_DB)

def fht(trec)
  case trec
  when RDL::Type::FiniteHashType
    trec
  else
    RDL::Globals.types[:bot]
  end
end
