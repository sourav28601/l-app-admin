
const { ClothesCategory } = require('../models');

// Add a new ClothesCategory
exports.addClothesCategory = async (req, res, next) => {
  try {
    const { category_name, image } = req.body;
    const newCategory = await ClothesCategory.create({
      category_name,
      image
    });
    res.status(201).json(newCategory);
  } catch (err) {
    next(err);
  }
};

// Get all ClothesCategories
exports.getClothesCategories = async (req, res, next) => {
  try {
    const categories = await ClothesCategory.findAll();
    res.status(200).json(categories);
  } catch (err) {
    next(err);
  }
};

// Update a ClothesCategory
exports.updateClothesCategory = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { category_name, image } = req.body;
    const [updatedRows, [updatedCategory]] = await ClothesCategory.update(
      {
        category_name,
        image
      },
      {
        where: {
          id
        },
        returning: true
      }
    );
    if (updatedRows === 0) {
      return res.status(404).json({ message: 'ClothesCategory not found' });
    }
    res.status(200).json(updatedCategory);
  } catch (err) {
    next(err);
  }
};

// Delete a ClothesCategory
exports.deleteClothesCategory = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedCategory = await ClothesCategory.destroy({
      where: {
        id
      }
    });
    if (!deletedCategory) {
      return res.status(404).json({ message: 'ClothesCategory not found' });
    }
    res.status(200).json({ message: 'ClothesCategory deleted successfully' });
  } catch (err) {
    next(err);
  }
};

