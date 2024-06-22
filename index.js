// const sumFunc = require('./source')
const fs = require('fs');
const path = require('path');
const os = require('os');
const http = require('http')

const pathToTextFile = './src/test/texts';
const pathToAudioFile = './src/test/holy_diver.mp3';
const pathToCatalog = './src/test/test-1';

// Module FileSystem
// check test catalog
/* function checkTestCatalog(){
    fs.existsSync(pathToCatalog)
        ? console.log('Exist')
        : console.log('Not exist')
}

checkTestCatalog(); */

// check test file
/* function checkTestFile(){
    fs.existsSync(pathToAudioFile)
        ? console.log('File exist')
        : console.log('File not exist')
}

checkTestFile(); */
// Get info
/* const getFileInfo = () => fs.statSync(pathToAudioFile)

console.log(getFileInfo().size) */

// Get all from catalog
/* const getAll = () => fs.readdirSync(pathToCatalog);

console.log(getAll()) */
// Read file
/* console.log(fs.readFile(pathToTextFile, 'utf8',(err, data) => {
    if(err) throw new Error(err.message);
    console.log(data)
})) */
// Write file
// fs.writeFileSync(pathToTextFile, 'I like WEB Socket')
// fs.appendFileSync(pathToTextFile, '\n I like Node.js', 'utf8')
// Delete file
// fs.unlinkSync(pathToCatalog)
// fs.rmdirSync(pathToCatalog)
// Module PATH
// console.log(path.basename(pathToAudioFile))
// console.log(path.dirname(pathToAudioFile))
// console.log(path.extname(pathToAudioFile))
// console.log(path.parse(pathToAudioFile))
// get abs path
// console.log(path.join(__dirname, 'src', 'test'))
// console.log(path.join(__filename))
// console.log(path.resolve('src', 'test'))
// console.log(__dirname)

// Module OS
// console.log(os.constants)
// console.log(os.homedir())
// console.log(os.hostname())
// console.log(os.platform())
// console.log(os.release())
// console.log(os.totalmem())
// console.log(os.arch())

// Process
/* process.env.PORT=5000;
process.env.DB_PORT=5432;
console.log(process.env.PORT)
console.log(process.env.DB_PORT) */

// console.log(sumFunc(20, 30))
