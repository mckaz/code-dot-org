class Sequel::Model
  extend RDL::Annotate

  type 'self.join', "(Symbol, %any) -> ``Table.join_ret_type(table_type(trec), targs)``", wrap: false
  type 'self.insert', "(``Table.insert_arg_type(table_type(trec), targs)``) -> Integer", wrap: false
  type 'self.insert', "(``Table.insert_arg_type(table_type(trec), targs, true)``, %any) -> Integer", wrap: false
  type 'self.where', "(``Table.where_arg_type(table_type(trec), targs)``) -> ``table_type(trec)``", wrap: false
  type 'self.where', "(``Table.where_arg_type(table_type(trec), targs, true)``, %any) -> ``table_type(trec)``", wrap: false
  type 'self.first', "() -> ``sing_to_nominal(trec)``", wrap: false
  type 'self.get', "(``Table.get_input(table_type(trec))``) -> ``Table.get_output(table_type(trec), targs[0])``", wrap: false
  type 'self.select_map', "(Symbol) -> ``select_map_output(table_type(trec), targs, :select_map)``", wrap: false


  def self.sing_to_nominal(trec)
    case trec
    when RDL::Type::SingletonType
      raise "unexpected receiver type" unless trec.val.is_a?(Class)
      RDL::Type::NominalType.new(trec.val)
    else
      raise "unexpected type #{trec}"
    end
  end
  
  def self.table_type(trec)
    case trec
    when RDL::Type::SingletonType
      raise "unexpected receiver type" unless trec.val.is_a?(Class)
      table_name = trec.val.table_name
      raise "no schema found" unless table_schema = RDL::Globals.db_schema[table_name]
      ## map trec to Table type with relevant parameters
      new_schema = table_schema.elts.clone
      new_schema[:__last_joined] = new_schema[:__all_joined] = RDL::Type::SingletonType.new table_name
      new_schema[:__selected] = RDL::Globals.types[:nil]
      new_schema[:__orm] = RDL::Type::NominalType.new(trec.val) ## for some methods, need to know if base was Model class or dataset
      hash_type = RDL::Type::FiniteHashType.new(new_schema, nil)
      table_type = RDL::Type::GenericType.new(RDL::Type::NominalType.new(Table), hash_type)
    else
      raise "unexpected receiver type"
    end
  end
  
end
