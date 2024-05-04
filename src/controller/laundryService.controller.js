const { LaundryService } = require('../models');

exports.addLaundryService = async (req, res, next) => {
  try {
    const {
      service_name,
      service_description,
      service_price,
      service_rating,
      service_title,
      service_image
    } = req.body;

    const newService = await LaundryService.create({
      service_name,
      service_description,
      service_price,
      service_rating,
      service_title,
      service_image
    });

    res.status(201).json(newService);
  } catch (err) {
    next(err);
  }
};

// Get all LaundryServices
exports.getLaundryServices = async (req, res, next) => {
  try {
    const services = await LaundryService.findAll();
    res.status(200).json(services);
  } catch (err) {
    next(err);
  }
};
exports.getServicesWithId = async (req, res, next) => {
  try {
    const services = await LaundryService.findOne({where:{id:req.params}});
    res.status(200).json(services);
  } catch (err) {
    next(err);
  }
};

// Update a LaundryService
exports.updateLaundryService = async (req, res, next) => {
  try {
    const { id } = req.params;
    const {
      service_name,
      service_description,
      service_price,
      service_rating,
      service_title,
      service_image
    } = req.body;

    const [updatedRows, [updatedService]] = await LaundryService.update(
      {
        service_name,
        service_description,
        service_price,
        service_rating,
        service_title,
        service_image
      },
      {
        where: {
          id
        },
        returning: true
      }
    );

    if (updatedRows === 0) {
      return res.status(404).json({ message: 'LaundryService not found' });
    }

    res.status(200).json(updatedService);
  } catch (err) {
    next(err);
  }
};

// Delete a LaundryService
exports.deleteLaundryService = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedService = await LaundryService.destroy({
      where: {
        id
      }
    });

    if (!deletedService) {
      return res.status(404).json({ message: 'LaundryService not found' });
    }

    res.status(200).json({ message: 'LaundryService deleted successfully' });
  } catch (err) {
    next(err);
  }
};
