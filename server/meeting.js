const express = require('express');
const db = require('./db')
const bodyparser = require('body-parser');

const meetingRouter = express.Router();


meetingRouter.use(bodyparser.json());

//populate data set
let meetings = db.getAllFromDatabase('meetings');

meetingRouter.get('/',  (req, res, next) => {
  res.send(meetings);
})

meetingRouter.post('/', (req, res, next) => {
  const newMeeting = db.createMeeting();
  if(!newMeeting){
      res.status(400).send();
  } else {
      db.addToDatabase('meetings', newMeeting);
      res.status(201).send(newMeeting);
  }
})

meetingRouter.delete('/',  (req, res, next) => {
    db.deleteAllFromDatabase('meetings');
    meetings = [];
    res.status(204).send();
})

 module.exports = meetingRouter;