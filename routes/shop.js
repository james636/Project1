const path = require('path');


const express = require('express');//import express into this file

const router = express.Router();//feature of express.js 

const rootDir = require('../util/path');

router.get('/', (req, res, next) => {    
    res.sendFile(path.join(rootDir, 'Views', 'shop.html')); //join combines the global name for folder and paths. Can run on any operating system
});

module.exports = router; 