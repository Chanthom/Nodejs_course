const fs = require('fs');

const rs = fs.createReadStream('./files/newReply.txt', {encoding: 'utf-8'});

const ws = fs.createWriteStream('./files/new-newReply.txt');

/*
rs.on('data', (dataChuck) => {
    ws.write(dataChuck);
})
*/

// more efficient way
rs.pipe(ws);