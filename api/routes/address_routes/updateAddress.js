const router = require('express').Router();

const Address = require('../../models/address');

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    await Address.updateOne({ id }, req.body);
    const updatedAddress = await Address.findById(id);

    return res.status(200).json({
      success: true,
      updatedAddress,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      error: 'SERVER_ERROR',
    });
  }
});

module.exports = router;
