const routes = require('express').Router();
const UserController = require('./app/controllers/UserController');

routes.get('/users', UserController.index);
routes.get('/users/:_id', UserController.show);
routes.post('/users', UserController.create);
routes.put('/users/:_id', UserController.update);
routes.delete('/user/:_id', UserController.delete);
module.eposrts = routes;

module.exports = routes;