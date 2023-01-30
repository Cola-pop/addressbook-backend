const router = require('express').Router();

const addAddress = require('./addAddress');
const deleteAddress = require('./deleteAddress');
const findAllAddresses = require('./findAllAddresses');
const updateAddress = require('./updateAddress');

router.use('/', addAddress);
router.use('/', deleteAddress);
router.use('/', findAllAddresses);
router.use('/', updateAddress);

module.exports = router;
