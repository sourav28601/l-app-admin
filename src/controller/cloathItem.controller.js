
const { CloathsItem } = require('../models');

// Add a new CloathsItem
exports.addItem = async (req, res, next) => {
  try {
    const {
      order_id,
      category_id,
      quantity,
      special_instruction
    } = req.body;

    const newItem = await CloathsItem.create({
      order_id,
      category_id,
      quantity,
      special_instruction
    });

    res.status(201).json(newItem);
  } catch (err) {
    next(err);
  }
};

// Delete a CloathsItem
exports.deleteItem = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedItem = await CloathsItem.destroy({
      where: {
        id
      }
    });

    if (!deletedItem) {
      return res.status(404).json({ message: 'CloathsItem not found' });
    }

    res.status(200).json({ message: 'CloathsItem deleted successfully' });
  } catch (err) {
    next(err);
  }
};

// Update a CloathsItem
exports.updateItem = async (req, res, next) => {
  try {
    const { id } = req.params;
    const {
      order_id,
      category_id,
      quantity,
      special_instruction
    } = req.body;

    const [updatedRows, [updatedItem]] = await CloathsItem.update(
      {
        order_id,
        category_id,
        quantity,
        special_instruction
      },
      {
        where: {
          id
        },
        returning: true
      }
    );

    if (updatedRows === 0) {
      return res.status(404).json({ message: 'CloathsItem not found' });
    }

    res.status(200).json(updatedItem);
  } catch (err) {
    next(err);
  }
};

// Get all CloathsItems
exports.getItem = async (req, res, next) => {
  try {
    const items = await CloathsItem.findAll();
    res.status(200).json(items);
  } catch (err) {
    next(err);
  }
};
