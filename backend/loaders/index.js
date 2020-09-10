const expressLoader = require('./expressLoader');
const mongodbLoader = require('./mongodbLoader');

module.exports = async ({ expressApp, mongoDbConfig}) => {
  await mongodbLoader(mongoDbConfig);
  const initialisedExpressApp = await expressLoader({ app: expressApp });

  return { initialisedExpressApp };
};
