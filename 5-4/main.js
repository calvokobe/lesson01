const json = require('./kobe.json');
function recusive(obj) {
    const keys = Object.keys(obj)
    for (key of keys) {
        if (key === "kobe") {
            console.log(obj[key])
        } else if (typeof obj[key] === "object") {
            recusive(obj[key])
        }
    }
}
recusive(json)