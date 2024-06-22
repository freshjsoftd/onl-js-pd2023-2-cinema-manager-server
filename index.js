// const sumFunc = require('./source')
const fs = require('fs');
const path = require('path');
const os = require('os');
const http = require('http');

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

// Create server with http module
const HOST_NAME = '127.0.0.1';
const PORT = 5000;

const server = http.createServer((req, res) => {
	const url = req.url;
	console.log(`URL is ${url}`);
	console.log(`METHOD is ${req.method}`);

	res.setHeader('Content-Type', 'text/html; charset=utf-8');
	// res.write('<h1>SERVER</h1>')
	// res.end()
	switch (url) {
		case '/':
			console.log('Home page');
			const homePage = fs.readFileSync('./public/index.html', 'utf8');
			res.write(homePage);
			res.end();
			break;
        case '/contact':
            console.log('Contact page');
            const contactPage = fs.readFileSync('./public/contact.html', 'utf8');
			res.write(contactPage);
			res.end();
			break;
        default:
            if(url.includes('/img')){
                console.log('images')
                fs.readFile(`./public${url}`, (err, data) => {
                    if(err){
                        res.statusCode = 404;
                        throw err;
                    }
                    res.setHeader('Content-Type', 'image/jpeg')
                    res.write(data)
                    res.end();
                })
            }else{
                res.write('<h1>Page not found</h1>')
            }
            
	}
});

server.listen(PORT, HOST_NAME, () =>
	console.log(`Server running at http://${HOST_NAME}:${PORT}`)
);
