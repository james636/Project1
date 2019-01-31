const express = require('express');

const app = express();

app.use('/add-product', (req, res, next) => {
    console.log('In 2 middleware!');
    res.send('<h1>The "Please Add Product" Page</h1>'); 
});

app.use('/', (req, res, next) => {
    console.log('In 2 middleware!');
    res.send('<h1>Hello World!</h1>');    //This last next dies or send response => res.send
});

app.listen(3000);



