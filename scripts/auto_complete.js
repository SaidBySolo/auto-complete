const fs = require('fs')

let start = new Date();

const jsonFile = fs.readFileSync('./result-korean-character.json', 'utf8')

const jsonData = JSON.parse(jsonFile);

const result = []

Object.keys(jsonData).forEach(key => {
    if (key.includes('chino')){
        result.push(key)
    }
})


console.log(result)
console.log((new Date() - start) / 1000)