const data = require('./data')
const {identifier, command} = require('./config.json')
const fs = require('fs')

for(var lang in data){
    const text = data[lang][identifier].replace('\t','').replace('#','').replace('\r','')
    const output = command.replace('%s',text)
    fs.appendFile('output.txt', `${output}\n`, function(){})
}