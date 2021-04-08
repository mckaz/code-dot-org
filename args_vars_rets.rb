require 'csv'

dirs = ['code-dot-org/dashboard', 'discourse', 'journey', 'talks', 'tzinfo', 'money', 'minimagick', 'ronin']


def process_csv(csv, hash)
  {"E" => 0, "P" => 0}
  #res = {"Arg" => Hash.new(0), "Ret" => Hash.new(0), "Var" => Hash.new(0)}
  csv.each_with_index { |row, i|
    next if (i == 0) || row[0].start_with?("Total")
    category = row[2]
    result = row[6]
    raise "Unexpected category #{category}." unless ["Arg", "Ret", "Var"].include? category
    raise "Unexpected result #{result}." unless ["E", "P", "T", "TS", "N"].include? result
    hash[category][result] += 1
  }
  return true
end


total_results = {"C" => {"Arg" => Hash.new(0), "Ret" => Hash.new(0), "Var" => Hash.new(0)}, "CH" => {"Arg" => Hash.new(0), "Ret" => Hash.new(0), "Var" => Hash.new(0)}, "CT" => {"Arg" => Hash.new(0), "Ret" => Hash.new(0), "Var" => Hash.new(0)}, "CHT" => {"Arg" => Hash.new(0), "Ret" => Hash.new(0), "Var" => Hash.new(0)} }

dirs.each_with_index { |dir, i|
  puts "Processing #{dir}"
  c_csv = CSV.read(dir + "/no_twin_infer_data.csv")
  process_csv(c_csv, total_results["C"])
  ch_csv = CSV.read(dir + "/no_twin_heur_infer_data.csv")
  process_csv(ch_csv, total_results["CH"])
  ct_csv = CSV.read(dir + "/twin__0.5_3_infer_data.csv")
  process_csv(ct_csv, total_results["CT"])
  cht_csv = CSV.read(dir + "/twin_heur__0.5_3_infer_data.csv")
  process_csv(cht_csv, total_results["CHT"])
}

["C", "CH", "CT", "CHT"].each { |conf|
  puts "======================= Configuration: #{conf} ======================="
  ["Arg", "Ret", "Var"].each { |cat|
    puts "#{cat}: "
    ["E", "P", "T", "TS", "N"].each { |res|
      puts "   #{res}: #{total_results[conf][cat][res]}"
    }
  }
}
