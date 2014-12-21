var argv = require('minimist')(process.argv.slice(2));

var swig = require('swig'),
    to = require('to'),
    committees = to.format.yaml.load(argv.d),
    template = swig.compileFile(argv.i),
    out = template(committees),
    fs = require('fs')

fs.writeFileSync(argv.o, out)