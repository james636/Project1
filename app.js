const express = require('express');//import express.js

const bodyParser = require('body-parser');//import newly installed body parser

const app = express();

const adminRoutes = require('./routes/admin.js');//importing router opject
const shopRoutes = require('./routes/shop.js');//importing routes, order doesn't matter

app.use(bodyParser.urlencoded({extended: true})); //function registers middleware function, package calls next so reqest reachers middleware. Won't parse files, need different parser

app.use('/admin', adminRoutes);//admin routes handler, order matters
app.use(shopRoutes);//order matters because get here

app.use('/', (req, res, next)=>{
    res.status(404).send('<h1>Page not found</h1>')
});

app.listen(3000);



