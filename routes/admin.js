const path = require('path')
const express = require('express');
const router = express.Router();

router.use('/add-product', async (req, res, next) => {

    const cityName = req.body.cityName;

    const url =
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=59e2546d38af4a4e0503a859537a5211`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'famous-quotes4.p.rapidapi.com',
            'X-RapidAPI-Key': 'your-rapidapi-key'
        }
    };
    // promise syntax
    fetch(url, options)
        .then(res => res.json())
        .then(json => console.log(json))
        .catch(err => console.error('error:' + err));
    try {
        let response = await fetch(url, options);
        response = await response.json();


        res.setHeader('Content-type','text/html');
        const html=`<h1>${response.weather[0].main}</h1> <p>${response.weather[0].description}</p>`;
        res.status(200).send(html);
    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: `Internal Server Error.` });
    }



    // res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));

});

router.get('/product', (req, res, next) => {
    res.sendFile();
    res.redirect('/');
})


module.exports = router;