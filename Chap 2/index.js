const fsPromises = require('fs').promises;
//Import the fs common core module
const path = require('path');
// could be error due to "/"or "\" => so import path can solve this 

/*
fs.readFile('./files/starter.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
})
//without data.toString in the console.log => data return Buffer number
// can also use the parameter "utf8" in fs.readfile
*/
/*
fs.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
})
*/

/*
// to write a file we can use 

fs.writeFile(path.join(__dirname, 'files', 'reply.txt'), 'Nice to meet you', (err) => {
    if (err) throw err;
    console.log('Write complete');

    //better to put the appendFile in the write file, if we update a file that already exist

    fs.appendFile(path.join(__dirname, 'files', 'reply.txt'), '\n\nYes it is !', (err) => {
        if (err) throw err;
        console.log('Append complete');

        //to rename a file

        fs.rename(path.join(__dirname, 'files', 'reply.txt'), path.join(__dirname, 'files', 'newReply.txt'), (err) => {
            if (err) throw err;
            console.log('rename complete');
        })
    })
})

// to update a file or create a file that doesn't exist
/*
fs.appendFile(path.join(__dirname, 'files', 'test.txt'), 'testing text', (err) => {
    if (err) throw err;
    console.log('Append complete');
})
*/


const fileOps = async () => {
    try  {
        const data = await fsPromises.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf-8');
        console.log(data);
        await fsPromises.unlink(path.join(__dirname, 'files', 'starter.txt'));
        //delete the file
        await fsPromises.writeFile(path.join(__dirname, 'files', 'promiseWrite.txt'), data);
        await fsPromises.appendFile(path.join(__dirname, 'files', 'promiseWrite.txt'), '\n\nNice to meet you');
        await fsPromises.rename(path.join(__dirname, 'files', 'promiseWrite.txt'), path.join(__dirname, 'files', 'promiseComplete.txt'));
        const newData = await fsPromises.readFile(path.join(__dirname, 'files', 'promiseComplete.txt'), 'utf-8');
        console.log(newData);
    } catch (err) {
        console.error(err);
    }
}

fileOps();


// exit on uncaught errors
process.on('uncaughtException', err => {
    console.error(`There was an uncaught errors: ${err}`);
    process.exit(1);
})
