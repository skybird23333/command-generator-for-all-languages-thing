const fs = require('fs');
console.log('Reading data...');
const textFiles = fs.readdirSync('./texts').filter(file => file.endsWith('.lang'));

const minutes = 2
var data = {}

textFiles.forEach(async file => {
    data[file] = {}
    fs.readFile(`./texts/${file}`,"utf8", async function(err, text){
        const texts = text.split('\n')
        texts.forEach(async line => {
            if(!(line.startsWith('#') || line === "\n" || line === "\n ")) return
            data[file][line.replace('	#', '').split('=')[0]] = line.replace('   #', '').split('=')[1]
        })
    })
})

setTimeout(function () {
    const filedata = JSON.stringify(data, null, "\t")
    fs.writeFile('data.json', filedata, function (err) {
        if (err) {
            console.log(err)
        }
        else console.log('kdone')
    })
}, 1000 * 60 * minutes)
