const router = require('express').Router();

const Address = require('../../models/address');

router.post('/', async (req, res) => {
  const newAddress = new Address({
    firstName: req.body.firstName,
    surname: req.body.surname,
    email: req.body.email,
    phone: req.body.phone,
  });

  newAddress.save((error) => {
    if (error) {
      return res.status(400).json({
        success: false,
        error: 'SERVER_ERROR',
      });
    }

    return res.status(200).json({
      success: true,
      newAddress,
    });
  });
});

module.exports = router;
