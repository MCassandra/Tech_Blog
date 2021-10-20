const router = require('express').Router();
const { Users, Band } = require('../../models');

// GET all bands
router.get('/', async (req, res) => {
  try {
    const bandData = await Band.findAll({
      include: [{ model: Users }],
    });
    res.status(200).json(bandData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET a single band
router.get('/:id', async (req, res) => {
  try {
    const bandData = await Band.findByPk(req.params.id, {
      include: [{ model: Users }],
    });

    if (!bandData) {
      res.status(404).json({ message: 'No band found with that id!' });
      return;
    }

    res.status(200).json(bandData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// CREATE a band
router.post('/', async (req, res) => {
  try {
    const groupData = await Band.create({
      reader_id: req.body.reader_id,
    });
    res.status(200).json(groupData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// DELETE a band
router.delete('/:id', async (req, res) => {
  try {
    const groupData = await Band.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!groupData) {
      res.status(404).json({ message: 'No band found with that id!' });
      return;
    }

    res.status(200).json(groupData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

