const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.render('parks/index.ejs');
})

router.get('/show', (req, res) => {
    res.render('parks/show.ejs')
})

router.get('/new', (req, res) => {
    res.render('parks/new.ejs')
})






module.exports = router;