const express = require('express');
const db = require('./db')
const bodyparser = require('body-parser');

const workRouter = express.Router();


workRouter.use(bodyparser.json());

//populate data set
let work = db.getAllFromDatabase('work');

workRouter.use('/:workId', (req, res, next) => {
    let workId = req.params.workId;
    let workIndex = work.findIndex(obj => obj.id === workId);
    if(workIndex !== -1){
      req.workIndex = workIndex;
      next();
    } else {
      res.status(404).send('Work not found!');
    }
})

workRouter.get('/',  (req, res, next) => {
    let minionWork = work.filter(obj => obj.minionId === req.minionId);
    res.send(minionWork);
})

workRouter.post('/', (req, res, next) => {
  const newWork = req.body;
  if(!newWork){
      res.status(400).send();
  } else {
      db.addToDatabase('work', newWork);
      res.status(201).send(newWork);
  }
})

workRouter.put('/:workId',  (req, res, next) => {
    if(work[req.workIndex].minionId !== req.minionId){
        res.status(400).send();
    } else {
    db.updateInstanceInDatabase('work', req.body);
    works = db.getAllFromDatabase('work');
    res.send(work[req.workIndex]);
    }
})

workRouter.delete('/:workId',  (req, res, next) => {
  db.deleteFromDatabasebyId('work', req.params.workId);
  res.status(204).send();
})

module.exports = workRouter;