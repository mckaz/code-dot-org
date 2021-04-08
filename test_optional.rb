require 'rdl'
require 'types/core'

class A
  def foo(x = Time.now)
    x
  end
end

RDL.infer A, :foo, time: :later

RDL.do_infer :later
