const fs = require('fs');
const { resolve } = require('path');
const { rejects } = require('assert');
console.log('Reading data...');
const textFiles = fs.readdirSync('./texts').filter(file => file.endsWith('.lang'));

var data = {}
var promisesArray = []

textFiles.forEach(function (file, i) {
    data[file] = {}
    let x = new Promise((resolve, reject) => {
        fs.readFile(`./texts/${file}`, "utf8", function (err, text) {
            if (err) console.error(err)
            console.log(`Parsing ${file}`)
            let texts = text.split('\n')

            let y = new Promise((resolve, reject) => {
                texts.forEach(function (line, x) {
                    if (!(line.startsWith('#') || line === "\n" || line === "\n ")) {
                        data[file][line.replace('    #', '').split('=')[0]] = line.replace('   #', '').split('=')[1]
                    }
                })
                resolve()
            }).then(z => resolve())
        })

    })
    promisesArray.push(x)

});

Promise.all(promisesArray).then(() => {
    let filedata = JSON.stringify(data, null, "\t")
    fs.writeFile('data.json', filedata, function (err) {
        if (err) {
            console.log(err)
        }
        else console.log('done')
    })
});


//made by 18.58.9.9.26#2436 from discord
//i obviously cant write code that good lmao