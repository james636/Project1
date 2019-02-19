const path = require('path');// import path core module

const express = require('express');//import express into this file

const adminController = require('../controllers/admin');

const router = express.Router();//feature of express.js  


//implicitly reached /admin/add-product => GET
router.get('/add-product', adminController.getAddProduct);

//admin/products =>GET
router.get('/products', adminController.getProducts);

//implicitly reached /admin/add-product => POST
router.post('/add-product', adminController.postAddProduct);

module.exports = router;
