const { Schema } = require('mongoose');

module.exports = new Schema({
  title: String,
  amount: String,
  amountType: String,
});
