const express = require('express');
const minionsRouter = express.Router();

const { addToDatabase,
getAllFromDatabase,
getFromDatabaseById,
updateInstanceInDatabase,
deleteFromDatabaseById,} = require('./db');

minionsRouter.param('minionId', (req, res, next, id) => {
    const minion = getFromDatabaseById('minions', id);
    if(minion) {
        req.minion = minion;
        next();
    } else {
        res.status(404).send();
    }
});

minionsRouter.get('/', (req, res) => {
    res.send(getFromDatabaseId('minions'))
});

minionsRouter.post('/', (req, res) => {
    newMinion = addToDatabase('minions', req.body);
    res.status(201).send(newMinion);
});

minionsRouter.get('/:minionId', (req, res) => {
    res.send(req.minion);
});

minionsRouter.put('/:minionId', (req, res) => {
    let dataUpdate = updateInstanceInDatabase('minions', req.body);
    res.send(dataUpdate);
});

minionsRouter.delete('/:minionId', (req, res) => {
    let dataDelete = deleteFromDatabaseById('minions', req.params.minionId);
    
    if(dataDelete) {
        res.status(204);
    } else {
        res.status(500);
    }
    res.send();
});
