const num = Number(process.argv[2])
const hundred = Math.floor(num / 100)
const ten = Math.floor((num - (hundred * 100)) / 10)
const one = num - (hundred * 100) - (ten * 10)
console.log(`100円玉${hundred}枚, 10円玉${ten}枚, 1円玉${one}枚`)

