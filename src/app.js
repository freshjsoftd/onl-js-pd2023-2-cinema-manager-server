const fs = require('fs');
const path = require('path');
// ===============================
const express = require('express');
const cors = require('cors')
// ===============================
// const {getTime, showTime} = require('./middleware/time.mw')
// const ActorController = require('./controllers/actorController')
const {errorHandlers: {validationErrorHandler, errorHandler}, time: {getTime, showTime}} = require('./middleware')
const router = require('./routers')
// const directorRouter = require('./routers/directorRouters')

const app = express();


app.use(cors())
app.use(express.json());
app.use(express.static(path.resolve('public')))

// Get-Show time
// app.use(getTime);
// app.use(showTime);
app.use('/time', getTime, showTime);

app.use(validationErrorHandler, errorHandler)

app.use('/api', router)
// app.use(directorRouter)

// app.get('/actors', ActorController.getActors)
// app.get('/actors/:actorId', ActorController.getActorById)
// app.post('/actors', ActorController.createActor)
// app.put('/actors', ActorController.updateActor)
// app.delete('/actors/:actorId', ActorController.deleteActor)



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
