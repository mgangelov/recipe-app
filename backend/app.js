const express = require('express');

const config = require('./config');
const loaders = require('./loaders');

async function startServer() {
  const {
    initialisedExpressApp,
  } = await loaders({
    expressApp: express(),
    mongoDbConfig: config.mongodb,
  });

  const expressPort = config.express.port;

  initialisedExpressApp.listen(expressPort, (err) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }

    console.log(`Backend listening at port ${expressPort}.`);
  });
}

startServer();
