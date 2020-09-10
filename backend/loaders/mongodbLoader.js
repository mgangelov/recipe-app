const mongoose = require('mongoose');

const mongoDbClientOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

module.exports = async ({
  host,
  username,
  password,
  database,
}) => {
  mongoose.connect(`mongodb+srv://${username}:${password}@${host}/${database}?retryWrites=true&w=majority`, mongoDbClientOptions);

  const mongoDbConnection = mongoose.connection;

  mongoDbConnection.on(
    'error',
    () => console.error('MongoDB Connection error.'),
  );
  mongoDbConnection.once('open', () => {
    console.log('Connection to MongoDB established.');
  });
};
