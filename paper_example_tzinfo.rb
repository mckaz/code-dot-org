require 'rdl'
RDL::Config.instance.number_mode = true
require 'types/core'

class Timestamp
  def self.create(year, month, day)
        raise ArgumentError, 'year must be an Integer' unless year.kind_of?(Integer)
        raise ArgumentError, 'month must be an Integer' unless month.kind_of?(Integer)
        raise ArgumentError, 'day must be an Integer' unless day.kind_of?(Integer)

        # Based on days_from_civil from https://howardhinnant.github.io/date_algorithms.html#days_from_civil
        after_february = month > 2
        year -= 1 unless after_february
        era = year / 400
        year_of_era = year - era * 400
        day_of_year = day + (153 * (month + (after_february ? -3 : 9)) + 2) / 5 - 1
        day_of_era = year_of_era * 365 + year_of_era / 4 - year_of_era / 100 + day_of_year
        days_since_epoch = era * 146097 + day_of_era - 719468
        value = days_since_epoch * 24 * 60 * 60

        new(value)
  end

  def initialize(dud)
    dud
  end
end

RDL.infer Timestamp, 'self.create', time: :later

RDL.do_infer :later
