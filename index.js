// const sumFunc = require('./source')
const fs = require('fs');
const http = require('http');
const path = require('path');
// const os = require('os');
// ==========================
require('dotenv').config()
// const express = require('express');

// ==========================
const app = require('./src/app')

// const app = express();

// Create server with http module
const HOST_NAME = '127.0.0.1';
// process.env.PORT = 5000;
const PORT = process.env.PORT ;
const server = http.createServer(app)

console.log(process.env.PORT)



/* app.get('/', (req, res) => {
	fs.readFile('./public/index.html', 'utf8', (err, data) => {
		if (err) {
			res.status(404);
			throw err;
		}
		res.set('Content-Type', 'text/html; charset=utf-8').send(data);
		// res.setHeader('Content-Type', 'text/html; charset=utf-8')
		// res.write(data)
	});
});
app.get('/contact', (req, res) => {
	fs.readFile('./public/contact.html', 'utf8', (err, data) => {
		if (err) {
			res.status(404);
			throw err;
		}
		res.set('Content-Type', 'text/html; charset=utf-8').send(data);
		// res.setHeader('Content-Type', 'text/html; charset=utf-8')
		// res.write(data)
	});
});
app.get('/img/*', (req, res) => {
    const url = req.url;
    fs.readFile(`./public${url}`, (err, data) => {
       if (err) {
		res.status(404);
		throw err;
	}
	res.set({
        'Content-Type': 'image/jpeg',
        'Content-Type': 'image/png',
        'Content-Type': 'image/gif',
    }).send(data); 
    })
}); */

server.listen(PORT, HOST_NAME, () =>
	console.log(`Server running at http://${HOST_NAME}:${PORT}`)
);

/* const server = http.createServer((req, res) => {
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
}); */
