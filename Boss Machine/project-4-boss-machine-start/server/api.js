const express = require('express');
const apiRouter = express.Router();
const minionsRouter = require('./minions.js');
const {
    addToDatabase, getAllFromDatabase, getFromDatabaseById, updateInstanceInDatabase, deleteFromDatabasebyId
} = require('./db');


apiRouter.use('/api', minionsRouter);


module.exports = apiRouter;
