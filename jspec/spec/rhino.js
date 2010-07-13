
load('C:/ruby/lib/ruby/gems/1.8/gems/jspec-4.3.2/lib/jspec.js')
load('C:/ruby/lib/ruby/gems/1.8/gems/jspec-4.3.2/lib/jspec.xhr.js')
load('lib/StringCalculator.js')
load('spec/unit/spec.helper.js')

JSpec
.exec('spec/unit/spec.js')
.run({ reporter: JSpec.reporters.Terminal, fixturePath: 'spec/fixtures' })
.report()