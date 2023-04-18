const path = require('path');
const express = require('express');
const router = express.Router();

var cityname = "Delhi";

const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

router.get('/', async function (req, res) {
    res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
});

// router.get('/', (req , res , next) =>{
//     res.sendFile(path.join(__dirname, '../', 'views' , 'shop.html'))
// });

module.exports = router;