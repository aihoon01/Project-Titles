const minionsRouter = require('express').Router();

module.exports = minionsRouter;


const {
    addToDatabase, getAllFromDatabase, getFromDatabaseById, updateInstanceInDatabase, deleteFromDatabasebyId
} = require('./db');


minionsRouter.param('minionId', (req, res, next) => {
    const minion = getFromDatabaseById('minions', id)
    if(minion) {
        req.minion = minion;
        next();
    } else {
        res.status(404).send();
    }
});


minionsRouter.get('/', (req, res, next) => {
    res.send(getAllFromDatabase('minions'))
});

minionsRouter.post('/', (req, res, next) =>{
    const newMinion = addToDatabase('minions', req.body)
    res.status(201).send(newMinion);
});

minionsRouter.get('/:minionId', (req, res, next) => {
    res.send(req.minion);
});

minionsRouter.put('/:minionId', (req, res, next) => {
    let updateMinionInstance = updateInstanceInDatabase('minions', req.body);
    res.send(updateMinionInstance);
});

minionsRouter.delete('/:minionId', (req, res, next) => {
    let deleteMinioninstance = deleteFromDatabasebyId('minions', req.params.minionId);
    if(deleteMinioninstance) {
        res.status(204);
    } else {
        res.status(500);
    }
    res.send();
});

minionsRouter.get('/:minionId/work', (req, res, next) => {
    const minWork = getAllFromDatabase('work').filter(work => {
        return work.minionId === req.params.minionId;
    })
    res.send(minWork);
});

minionsRouter.post('/:minionId/work', (req, res, next) => {
    const newMinWork = req.body;
    newMinWork.minionId = req.params.minionId;
    const newWork = addToDatabase('work', newMinWork);
    res.status(201).send(newWork);
});

minionsRouter.param('workId', (req, res, next) => {
    const work = getFromDatabaseById('work', id);
    if (work) {
        req.work = work;
        next();
    } else {
        res.status(404).send();
    }
});

minionsRouter.put('/:minionId/work/:workId', (req, res, next) => {
    if (req.params.minionId !== req.body.minionId) {
        res.status(404).send();
    } else {
        updatedWork = updateInstanceInDatabase('work', req.body);
        res.send(updatedWork);
    }

});

minionsRouter.delete('/:minionId/work/:workId', (req, res, next) => {
        deletedWork = deleteFromDatabasebyId('work', req.params.minionId);
        if (deletedWork){
            res.status(201).send();
        } else {
            res.status(404).send();
        } 

});


