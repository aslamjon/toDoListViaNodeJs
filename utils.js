const fs = require('fs');

function writeDataToDataBase(filename, content) {
    fs.writeFileSync(filename, JSON.stringify(content, null, 4), 'utf-8', (err) => {
        if (err) console.log(err)
    })
}
module.exports = {
    writeDataToDataBase
}