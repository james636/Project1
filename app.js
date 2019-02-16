const path = require('path')

const express = require('express');//import express.js
const bodyParser = require('body-parser');//import newly installed body parser

const errorController = require('./controllers/error');

const app = express();

app.set('view engine', 'ejs');//tell express where to find dynamic views, set view engine to string ejs 
app.set('views', 'views');//set configuration and where to go.

const adminRoutes = require('./routes/admin.js');//importing router opject

const shopRoutes = require('./routes/shop.js');//importing routes, order doesn't matter

app.use(express.static(path.join(__dirname, 'public')));//express.js feature serves files statically, read-access, needs the path import (up top)

app.use(bodyParser.urlencoded({extended: true})); //function registers middleware function, package calls next so reqest reachers middleware. Won't parse files, need different parser

app.use('/admin', adminRoutes);//admin routes handler, order matters
app.use(shopRoutes);//order matters because get here

app.use(errorController.get404);

app.listen(3000);



