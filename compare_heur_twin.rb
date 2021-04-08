require 'csv'

#benchmark = "tzinfo"

tot_num_struct_to_nominal = 0
twin_struct_to_nominal = 0
cons_struct_to_nominal = 0

tot_num_is_model = 0
twin_is_model = 0
cons_is_model = 0

tot_num_is_pluralized_model = 0
twin_is_pluralized_model = 0
cons_is_pluralized_model = 0

tot_num_int_names = 0
twin_int_names = 0
cons_int_names = 0

tot_num_int_array_name = 0
twin_int_array_name = 0
cons_int_array_name = 0

tot_num_predicate_method = 0
twin_predicate_method = 0
cons_predicate_method = 0

tot_num_string_name = 0
twin_string_name = 0
cons_string_name = 0

tot_num_hash_access = 0
twin_hash_access = 0
cons_hash_access = 0



dirs = ['code-dot-org/dashboard', 'discourse', 'journey', 'talks', 'tzinfo', 'money', 'minimagick', 'ronin']

dirs.each { |benchmark|

  twin_csv = CSV.read(benchmark+"/twin__0.5_3_infer_data.csv")
  heur_csv = CSV.read(benchmark+"/no_twin_heur_infer_data.csv")

  raise "Expected 7th column to be Solution Source" unless (twin_csv[0][7] == "Solution Source") && (heur_csv[0][7] == "Solution Source")


  heur_csv.each_with_index { |row, i|
    next if i == 0
    res = row[6]
    sol_source = row[7]
    #puts "Actual sol_source on row #{i} is #{sol_source}"
    if ((res == "E") || (res == "P")) && sol_source && (sol_source.start_with? "Heur: ")
      #puts "Here on row #{i} with #{sol_source}"
      heur_name = sol_source[6..-1]
      eval "tot_num_#{heur_name} += 1"
      #puts " Got it and for twin have #{twin_csv[i][7]}"
      if (twin_csv[i][7] == "Twin") && ((twin_csv[i][6] == "E") || (twin_csv[i] == "P"))
        eval "twin_#{heur_name} += 1"
      elsif (twin_csv[i][6] == "E") || (twin_csv[i] == "P")
        eval "cons_#{heur_name} += 1"
      end
    end
  }

  ## also want to see number of types inferred by twin that heuristics got
  tot_num_twin_inferred = 0
  tot_num_heur_twin = 0

  twin_csv.each_with_index { |row, i|
    next if i == 0
    twin_res = row[6]
    sol_source = row[7]
    if ((twin_res == "E") || (twin_res == "P")) && (sol_source == "Twin")
      tot_num_twin_inferred += 1
      if ((heur_csv[i][6] == "E") || (heur_csv[i][6] == "P")) && (heur_csv[i][7].start_with? "Heur: ")
        tot_num_heur_twin += 1
      end
    end
  }
}

puts "Twin results: "
puts "STN: #{twin_struct_to_nominal} out of #{tot_num_struct_to_nominal}. Cons: #{cons_struct_to_nominal}."
puts "is_model: #{twin_is_model} out of #{tot_num_is_model}. Cons: #{cons_is_model}."
puts "is_pluralized_model: #{twin_is_pluralized_model} out of #{tot_num_is_pluralized_model}. Cons: #{cons_is_pluralized_model}."
puts "int_names: #{twin_int_names} out of #{tot_num_int_names}. Cons: #{cons_int_names}."
puts "int_array_names: #{twin_int_array_name} out of #{tot_num_int_array_name}. Cons: #{cons_int_array_name}."
puts "predicate_method: #{twin_predicate_method} out of #{tot_num_predicate_method}. Cons: #{cons_predicate_method}."
puts "string_name: #{twin_string_name} out of #{tot_num_string_name}. Cons: #{cons_string_name}"
puts "hash_access: #{twin_hash_access} out of #{tot_num_hash_access}. Cons: #{cons_hash_access}"

puts "Conversely, of the #{tot_num_twin_inferred} matching types inferred by DeepSim, heuristics got #{tot_num_heur_twin}"
