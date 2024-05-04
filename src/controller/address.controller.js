const { Address } = require('../models');

exports.addAddress = async (req, res, next) => {
  try {
    const {
      user_id,state,city,pincode,phone_number, house_no, road_name, nearbyFamouseShopMall } = req.body;
      const newAddress = await Address.create({ user_id, state, city, pincode, phone_number,house_no,road_name,nearbyFamouseShopMall });
       res.status(201).json(newAddress);
     } catch (err) {
    next(err);
  }
};

// Get all addresses
exports.getAddress = async (req, res, next) => {
  try {
    const addresses = await Address.findAll();
    res.status(200).json(addresses);
  } catch (err) {
    next(err);
  }
};

// Delete an address
exports.deleteAddress = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedAddress = await Address.destroy({
      where: {
        id
      }
    });

    if (!deletedAddress) {
      return res.status(404).json({ message: 'Address not found' });
    }

    res.status(200).json({ message: 'Address deleted successfully' });
  } catch (err) {
    next(err);
  }
};

// Update an address
exports.updateAddress = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { user_id,state,city,pincode,phone_number,house_no,road_name,nearbyFamouseShopMall} = req.body;

    const [updatedRows, [updatedAddress]] = await Address.update(
      {
        user_id, state, city, pincode, phone_number, house_no, road_name, nearbyFamouseShopMall },
      {
        where: {
          id
        },
        returning: true
      }
    );

    if (updatedRows === 0) {
      return res.status(404).json({ message: 'Address not found' });
    }

    res.status(200).json(updatedAddress);
  } catch (err) {
    next(err);
  }
};
