const router = require('express').Router();

const Address = require('../../models/address');

router.get('/', async (req, res) => {
  try {
    const foundAddresses = await Address.find({});

    return res.status(200).json({
      success: true,
      foundAddresses,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      error: 'SERVER_ERROR',
    });
  }
});

module.exports = router;
