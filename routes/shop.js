const path = require('path');

const express = require('express');//import express into this file

const productsController = require('../controllers/products');

const router = express.Router();//feature of express.js 

router.get('/', productsController.getProducts);

module.exports = router; 