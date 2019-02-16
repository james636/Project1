const path = require('path');// import path core module

const express = require('express');//import express into this file

const productsController = require('../controllers/products');

const router = express.Router();//feature of express.js 

 


//implicitly reached /admin/add-product => GET
router.get('/add-product', productsController.getAddProduct);

//implicitly reached /admin/add-product => POST
router.post('/add-product', productsController.postAddproduct);

module.exports = router;
