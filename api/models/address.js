const mongoose = require('mongoose');

mongoose.set('useFindAndModify', false);

const AddressSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  surName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Address', AddressSchema);
