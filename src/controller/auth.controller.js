
const {User}=require('../models');
const Joi = require('joi');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { where } = require('sequelize');


exports.signup = async (req, res, next) => {
    try {
      const signupSchema = Joi.object({
        name: Joi.string().required(),
        email: Joi.string().email().required(),
        phone_number: Joi.string(),
        password: Joi.string().required(),
        profile_picture: Joi.string()
      });
      const { error, value } = signupSchema.validate(req.body);
      console.log('data',value)
      if (error) {
        throw new Error(error.details[0].message);
      }
      const { name, email,profile_picture, password,phone_number} = value;
      // console.log('data',name, email, contact_number, password, profile_picture, online_status, last_seen)
      const hashedPassword = await bcrypt.hash(password, 10);
      const jwtSecret = process.env.JWT_SECRET;
      const token = jwt.sign({ userId: name }, jwtSecret);
      const userdata = await User.create({
        name,
        email,
        phone_number,
        password: hashedPassword,
        profile_picture,
        token,
      });
       res.status(201).json({ user: userdata});
    } catch (err) {
      next(err);
    }
};
 
exports.login = async (req, res, next) => {
    try {
      const { email, password } = req.body;
      console.log('email, password ===>',req.body)
      const user = await User.findOne({ where: { email } });
      if (!user) {
        return res.status(401).json({ error: 'Invalid email or password' });
       }
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(401).json({ error: 'Invalid email or password' });
      }
      const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
      return res.status(200).json({ message: 'User logged in successfully', user});
    } catch (err) {
      return res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.adminLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    console.log('email, password ===>',req.body)
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(401).json({ error: 'Invalid email or password' });
     }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    return res.status(200).json({ message: 'User logged in successfully', user});
  } catch (err) {
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.logout=async (req,res,next)=>{
    try{
        
    }catch(err){

    }
}

exports.updateProfile = async (req, res, next) => {
  try {
    const { name, email, phone_number, profile_picture, role, UPI_ID, address } = req.body;
    const userToUpdate = await User.findByPk(req.user.id);

    if (!userToUpdate) {
      return res.status(404).json({ message: 'User not found' });
    }
    userToUpdate.name = name;
    userToUpdate.email = email;
    userToUpdate.phone_number = phone_number;
    userToUpdate.profile_picture = profile_picture; 
    await userToUpdate.save();
    return res.status(200).json({
      message: 'Profile updated successfully',
      user: {
        id: userToUpdate.id,
        name: userToUpdate.name,
        email: userToUpdate.email,
        phone_number: userToUpdate.phone_number,
        profile_picture: userToUpdate.profile_picture,
      },
    });
  } catch (err) {
    console.error(err); 
    return res.status(500).json({ message: 'Error updating profile' });
  }
};

exports.getUserData=async (req,res,next)=>{
    try{
        const data= await User.findOne({where:{id:req.user.userId}})
        res.status(200).json({ data });
    }catch(err){
        next(err);
    }
}
exports.getAllUserData=async(req,res,next)=>{
    try{
        const data=await User.findAll();
        res.status(200).json({data});
    }catch(err){
        next(err)
    }
}