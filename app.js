const http = require('http');
const routs = require('./routes');
const express = require('express');
const app = express();
const bodyParsher = require('body-parser');

app.use(bodyParsher.urlencoded({extended:false}));
app.use(express.static('public'));
 
const adminroute = require('./routes/admin');
const shoproute = require('./routes/shop');
const path = require('path');

app.use('/admin', adminroute);
app.use(shoproute);



app.use((req,res,next)=>{
    res.status(404).send("Page Note Found!");
})


app.listen('3000', () => {
    console.log("Server is runing");
})
