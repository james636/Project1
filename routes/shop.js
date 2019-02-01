const express = require('express');//import express into this file

const router = express.Router();//feature of express.js 

router.get('/', (req, res, next) => {    
    res.send('<h1>Hello World!</h1>');    //This last next dies or send response => res.send
});

module.exports = router; 