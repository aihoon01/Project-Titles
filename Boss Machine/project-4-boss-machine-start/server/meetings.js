const meetingsRouter = require('express').Router;

module.exports = meetingsRouter;
const {
    addToDatabase, getAllFromDatabase, getFromDatabaseById, createMeeting, updateInstanceInDatabase, deleteFromDatabasebyId, deleteAllFromDatabase
} = require('./db');


// meetingsRouter.params('/', (req, res, next) => {
//     const meeting = getFromDatabaseById('meetings', req.body);
//     if (meeting) {
//         req.meeting = meeting;
//         next();
//     } else {
//         res.statut(404).send();
//     }
// })

meetingsRouter.get('/', (req, res, next) => {
    res.send(getAllFromDatabase('meetings'));
})

meetingsRouter.post('/', (req, res, next) => {
    const newMeeting = addToDatabase('meetings', createMeeting());
        res.status(200).send(newMeeting);
})

meetingsRouter.delete('/', (req, res, next) => {
    deleteAllFromDatabase('meetings');
    res.status(204).send();
})