const { Router } = require('express');
const swaggerUi = require('swagger-ui-express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const AuthController = require('./controllers/AuthController');

// validators
const authStore = require('./validators/authStore');
const ongStore = require('./validators/ongStore');
const profileIndex = require('./validators/profileIndex');
const incidentDelete = require('./validators/incidentDelete');
const incidentIndex = require('./validators/incidentIndex');
const incidentStore = require('./validators/incidentStore');

const swaggerDocument = require('./swagger.json');

const routes = Router();

routes.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

routes.post('/auth', authStore, AuthController.store);

routes.get('/ongs', OngController.index);
routes.post('/ongs', ongStore, OngController.store);

routes.get('/incidents', incidentIndex, IncidentController.index);
routes.post('/incidents', incidentStore, IncidentController.store);
routes.delete('/incidents/:id', incidentDelete, IncidentController.delete);

routes.get('/profile', profileIndex, ProfileController.index);

module.exports = () => routes;
