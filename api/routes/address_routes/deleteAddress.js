const router = require('express').Router();

const Address = require('../../models/address');

router.delete('/:id', async (req, res) => {
  try {
    const deletedAddress = await Address.findByIdAndDelete(req.params.id);
    return res.status(200).json(deletedAddress);
  } catch (error) {
    return res.status(400).json({
      success: false,
      error: 'SERVER_ERROR',
    });
  }
});

module.exports = router;
