const express = require('express');
const apiRouter = express.Router();

const minionRouter = require('./minion');
apiRouter.use('/minions', minionRouter);

const ideaRouter = require('./idea');
apiRouter.use('/ideas', ideaRouter);

const meetingRouter = require('./meeting');
apiRouter.use('/meetings', meetingRouter);

module.exports = apiRouter;
