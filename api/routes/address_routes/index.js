const router = require('express').Router();

const findAllAddresses = require('./findAllAddresses');

router.use('/', findAllAddresses);

module.exports = router;
