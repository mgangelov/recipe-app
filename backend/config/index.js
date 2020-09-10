module.exports = {
  express: {
    port: parseInt(process.env.PORT || 3001, 10),
  },
  mongodb: {
    host: process.env.MONGODB_HOST || '',
    username: process.env.MONGODB_USERNAME || '',
    password: process.env.MONGODB_PASSWORD || '',
    database: 'cookbook',
  },
};
