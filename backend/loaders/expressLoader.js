const express = require('express');
const cors = require('cors');
const { recipesRouter } = require('../api');

module.exports = async ({ app }) => {
  app.use(express.json());
  app.use(cors());
  app.use('/', recipesRouter);
  console.log('Express server routes configured.');
  return app;
};
