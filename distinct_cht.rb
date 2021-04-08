require 'csv'


## ORDER: [cdo, discourse, journey, talks, tzinfo, money, minimagick, ronin]
dirs = ['code-dot-org/dashboard', 'discourse', 'journey', 'talks', 'tzinfo', 'money', 'minimagick', 'ronin']
counts = [0,0,0,0,0,0,0,0]

=begin
num_cdo = 0
num_discourse = 0
num_journey = 0
num_talks = 0
num_tzinfo = 0
num_money = 0
num_minimagick = 0
num_ronin = 0
=end

def count_distinct(ch_csv, ct_csv, cht_csv)
  count = 0
  cht_csv.each_with_index { |row, i|
    next if (i == 0)
    cht_res = row[6]
    if correct?(cht_res)
      ch_res = ch_csv[i][6]
      ct_res = ct_csv[i][6]
      if !correct?(ch_res) && !correct?(ct_res)
        #puts "Found case on row #{i}"
        count +=1
      else
        #puts "Got #{ch_res} for heur and #{ct_res}"
      end
#    else
#      raise "Expected E, P, T, or N, got #{cht_res} for row #{i}" if (cht_res != "T") && (cht_res != "N")
    end

  }
  return count
end

def correct?(res)
  (res == "E") || (res == "P")
end


dirs.each_with_index { |dir, i|
  ch_csv = CSV.read(dir + "/no_twin_heur_infer_data.csv")
  ct_csv = CSV.read(dir + "/twin__0.5_3_infer_data.csv")
  cht_csv = CSV.read(dir + "/twin_heur__0.5_3_infer_data.csv")
  counts[i] = count_distinct(ch_csv, ct_csv, cht_csv)
  puts "#{dir}: #{counts[i]}"
}


