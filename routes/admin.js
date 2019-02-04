const path = require('path');// import path core module

const express = require('express');//import express into this file

const router = express.Router();//feature of express.js 

const rootDir = require('../util/path');//constructs path to root directory

//implicitly reached /admin/add-product => GET
router.get('/add-product', (req, res, next) => {    
    res.sendFile(path.join(rootDir, 'Views', 'add-product.html')); //__dirname goes to folder, that's why I need ../, to go back up one folder in directory and then join the Views folder then the add-product.html
});

//implicitly reached /admin/add-product => POST
router.post('/add-product', (req, res, next) =>{
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;
