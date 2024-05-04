// const express=require('express');
// const router=express.Router();
// const controller =require("../controller/index.js");
// const { verifyToken } = require('../middleware/auth.middleware');

// // auth api
// router.post('/signup',controller.authController.signup);
// router.post('/login',controller.authController.login);
// router.get('/getUserData', verifyToken,controller.authController.getUserData);
// router.post('/logout',verifyToken,controller.authController.logout);
// router.post('updateProfile',verifyToken,controller.authController.updateProfile)

// //loundry api

// router.post('/addServices',controller.loundryServiceController.addLaundryService);
// router.get('/getServices',controller.loundryServiceController.getLaundryServices);
// router.get('/getServicesWithId/:id',controller.loundryServiceController.getServicesWithId);
// router.post('/deleteServices/:id', controller.loundryServiceController.deleteLaundryService);
//  router.put('/updateServices/:id',controller.loundryServiceController.updateLaundryService);

//  // // get alluser api
// router.get("/getAllUserData",controller.authController.getAllUserData)

// // order api
// router.post('/createOrders',controller.orderController.createOrder);
// router.get('/getAllOrders', controller.orderController.getAllOrders);
// router.get('/getOrdersById/:id', controller.orderController.getOrderById);
// router.put('/updateOrders/:id', controller.orderController.updateOrder);
// router.post('/deleteOrders/:id', controller.orderController.deleteOrder);


// // cart Api
// router.post('/add_cart',controller.CartController.addCart);
// router.get('/get_cart_Item', controller.CartController.getAllCartData);
// router.get('/getcartbyid/:id', controller.CartController.getCartDataById);
// router.put('/updatecart/:id', controller.CartController.updatCartData);
// router.post('/deletecart/:id', controller.CartController.deleteCartDataw);



// // payment api
// router.post('/addPayment',controller.paymentController.addPayment)
// router.get('/getPayment', controller.paymentController.getPaymentStatus);
// // router.get('/getOrdersById/:id', controller.orderController.getOrderById);
// router.put('/updatePayment/:id', controller.paymentController.updatePayment);
// router.post('/deletePayment/:id', controller.paymentController.deletePayment);

// // address api
// router.post('/createAddress',controller.addressController.addAddress);
// router.get('/getAllAddress', controller.addressController.getAddress);
// // router.get('/getOrdersById/:id', controller.orderController.getOrderById);
// router.put('/updateAddress/:id', controller.addressController.updateAddress);
// router.post('/deleteDelete/:id', controller.addressController.deleteAddress);

// // clothes item api
// router.post('/createClothesItem',controller.clothesItemController.addItem);
// router.get('/getClothesItem', controller.clothesItemController.getItem);
// router.get('/getClothesItem/:id', controller.clothesItemController.getItem);
// router.put('/updateClothesItem/:id', controller.clothesItemController.updateItem);
// router.post('/deleteClothesItem/:id', controller.clothesItemController.deleteItem);

// // clothes category
// router.post('/addClothesCategory',controller.clothesCategoryController.addClothesCategory);
// router.get('/getClothesCategory', controller.clothesCategoryController.getClothesCategories);
// router.get('/getClothesCategory/:id', controller.clothesCategoryController.getClothesCategories);
// router.put('/updateClothesCategory/:id', controller.clothesCategoryController.updateClothesCategory);
// router.post('/deleteClothesCategory/:id', controller.clothesCategoryController.deleteClothesCategory);
// // banners api 
// router.post('/addBannerOffers',controller.clothesCategoryController.addClothesCategory);
// router.get('/getBannerOffers', controller.clothesCategoryController.getClothesCategories);
// router.get('/getBannerOffers/:id', controller.clothesCategoryController.getClothesCategories);
// router.put('/updateBannerOffers/:id', controller.clothesCategoryController.updateClothesCategory);
// router.post('/deleteBannerOffers/:id', controller.clothesCategoryController.deleteClothesCategory);
// module.exports=router;



const express = require('express');
const router = express.Router();
const { verifyToken } = require('../middleware/auth.middleware');
const controllers = require("../controller/index.js");

// Authentication Routes
router.post('/auth/signup', controllers.authController.signup);
router.post('/auth/login', controllers.authController.login);
router.get('/auth/userData', verifyToken, controllers.authController.getUserData);
router.post('/auth/logout', verifyToken, controllers.authController.logout);
router.post('/auth/updateProfile', verifyToken, controllers.authController.updateProfile);
router.get('/auth/allUserData', controllers.authController.getAllUserData);

// Laundry Service Routes
router.post('/laundry/addService', controllers.loundryServiceController.addLaundryService);
router.get('/laundry/getServices', controllers.loundryServiceController.getLaundryServices);
router.get('/laundry/getService/:id', controllers.loundryServiceController.getServicesWithId);
router.post('/laundry/deleteService/:id', controllers.loundryServiceController.deleteLaundryService);
router.put('/laundry/updateService/:id', controllers.loundryServiceController.updateLaundryService);

// Order Routes
router.post('/order/create', controllers.orderController.createOrder);
router.get('/order/all', controllers.orderController.getAllOrders);
router.get('/order/:id', controllers.orderController.getOrderById);
router.put('/order/update/:id', controllers.orderController.updateOrder);
router.post('/order/delete/:id', controllers.orderController.deleteOrder);

// Cart Routes
router.post('/cart/add', controllers.CartController.addCart);
router.get('/cart/all', controllers.CartController.getAllCartData);
router.get('/cart/:id', controllers.CartController.getCartDataById);
router.put('/cart/update/:id', controllers.CartController.updatCartData);
router.post('/cart/delete/:id', controllers.CartController.deleteCartData);

// Payment Routes
router.post('/payment/add', controllers.paymentController.addPayment);
router.get('/payment/all', controllers.paymentController.getPaymentStatus);
router.put('/payment/update/:id', controllers.paymentController.updatePayment);
router.post('/payment/delete/:id', controllers.paymentController.deletePayment);

// Address Routes
router.post('/address/create', controllers.addressController.addAddress);
router.get('/address/all', controllers.addressController.getAddress);
router.put('/address/update/:id', controllers.addressController.updateAddress);
router.post('/address/delete/:id', controllers.addressController.deleteAddress);

// Clothes Item Routes
router.post('/clothesItem/create', controllers.clothesItemController.addItem);
router.get('/clothesItem/all', controllers.clothesItemController.getItem);
// router.get('/clothesItem/:id', controllers.clothesItemController.);
router.put('/clothesItem/update/:id', controllers.clothesItemController.updateItem);
router.post('/clothesItem/delete/:id', controllers.clothesItemController.deleteItem);

// Clothes Category Routes
router.post('/clothesCategory/add', controllers.clothesCategoryController.addClothesCategory);
router.get('/clothesCategory/all', controllers.clothesCategoryController.getClothesCategories);
// router.get('/clothesCategory/:id', controllers.clothesCategoryController.getClothesCategoryById);
// router.put('/clothesCategory/update/:id', controllers.clothesCategoryController.updateClothesCategory);
router.post('/clothesCategory/delete/:id', controllers.clothesCategoryController.deleteClothesCategory);

// Banners Routes
// router.post('/banners/add', controllers.bannerController.addBanner);
// router.get('/banners/all', controllers.bannerController.getAllBanners);
// router.get('/banners/:id', controllers.bannerController.getBannerById);
// router.put('/banners/update/:id', controllers.bannerController.updateBanner);
// router.post('/banners/delete/:id', controllers.bannerController.deleteBanner);

module.exports = router;
