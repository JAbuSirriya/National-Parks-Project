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


//INDEX/MAIN PAGE 
router.get('/', (req, res) => {
    res.render('parks/index.ejs', { currentUser: req.session.currentUser });
})

//DISPLAYS ALL NATIONAL PARKS ON ONE PAGE
router.get('/show', (req, res) => {
    res.render('parks/show.ejs', { currentUser: req.session.currentUser })
})

//DISPLAY EACH PARK INDIVIDUALLY
router.get('/show:id', (req, res) => {
    res.send('')
})





// FAVORITES CONTROLLER
// INDEX 
router.get('/favorites', (req,res) => {
    res.render('favorites/index.ejs', { currentUser: req.session.currentUser })
})

//DELETE ROUTE //NEEDS API 
// router.delete('/favorites/:index', (req, res) => {
//     //API.splice(req.params.index, 1);
// })


//DELETE ALL ROUTE //NEEDS API 
// router.delete('/favorites/:index', (req. res) => {
//     // API.length = 0;
//         res.redirect('/');
// });



module.exports = router;