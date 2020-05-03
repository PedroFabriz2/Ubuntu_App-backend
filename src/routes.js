const express = require('express');

const OngController = require('./controllers/OngController');

const IncidentsController = require('./controllers/IncidentsController');

const ProfileController = require('./controllers/ProfileController');

const SessionController = require('./controllers/SessionController');


const routes = express.Router();

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);//criar a rota principal...isso arruma o erro: 'Canot get'
routes.delete('/ongs/delete', OngController.delete);

routes.post('/incidents', IncidentsController.create);
routes.get('/incidents', IncidentsController.index);
routes.delete('/incidents/:id', IncidentsController.delete);

routes.get('/profile', ProfileController.index);

routes.post('/session', SessionController.create)


module.exports = routes;