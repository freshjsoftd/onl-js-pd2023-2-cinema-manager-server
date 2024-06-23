const fs = require('fs');
const path = require('path');
// ===============================
const express = require('express');
// ===============================
const ActorController = require('./controllers/actorController')

const app = express();

app.use(express.json());
// app.use(express.static('./public'))
app.use(express.static(path.join(__dirname, '..', 'public')))
// app.use(express.static(path.resolve('public')))

app.get('/', (req, res) => {
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

app.get('/actors', ActorController.getActors)
app.get('/actors/:actorId', ActorController.getActorById)
app.post('/actors/', ActorController.createActor)
app.put('/actors/:actorId', ActorController.updateActor)
app.delete('/actors/:actorId', ActorController.deleteActor)



// app.get('/img/*', (req, res) => {
// 	const url = req.url;
// 	fs.readFile(`./public${url}`, (err, data) => {
// 		if (err) {
// 			res.status(404);
// 			throw err;
// 		}
// 		res.set({
// 			'Content-Type': 'image/jpeg',
// 			'Content-Type': 'image/png',
// 			'Content-Type': 'image/gif',
// 		}).send(data);
// 	});
// });

/* 
app.get('/phones/', (req, res) => {
    res.redirect('/contact')
})

app.get('/download', (req, res) => {
    console.log('download');
    console.log(__dirname);
    res.download(path.join(__dirname, 'test', 'text'))
})

app.get('/codes', (req, res) => {
    console.log(req.query)
    const id = req.query.id
    const code = req.query.code
    console.log(`Id: ${id}, code: ${code}`)

    res.send(`Id: ${id}, code: ${code}`)
}) */

module.exports = app;
