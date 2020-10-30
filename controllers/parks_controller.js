const express = require('express');
const router = express.Router();

// //Middleware
// router.use((req, res, next) => {
//     if (req.session.currentUser) {
//         next()
//     } else {
//         res.redirect('/sessions/new')
//     }
// })

router.get('/', (req, res) => {
    res.render('parks/index.ejs', { currentUser: req.session.currentUser });
})

router.get('/show', (req, res) => {
    res.render('parks/show.ejs', { currentUser: req.session.currentUser })
})

router.get('/new', (req, res) => {
    res.render('parks/new.ejs', { currentUser: req.session.currentUser })
})







module.exports = router;