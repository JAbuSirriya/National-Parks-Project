const express = require('express');
const router = express.Router();
const axios = require('axios').default;
require('dotenv').config()
const Park = require('../models/parks.js')

//API REQUEST AND ROUTE 
router.get('/search', (req, res) => {
    t = req.query.name
    axios.get(`https://developer.nps.gov/api/v1/parks?q=${t}&api_key=${process.env.PARKKEY}`)
  .then(function (response) {
    console.log(response.data.data[0].fullName);
    Parks.create({
        parkname: response.data.data[0].fullName,
        url: response.data.data[0].url,
        description: response.data.data[0].description,
        image: response.data.data[0].images[0].url
    })
  res.redirect('/')
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
})

router.get('/seed', (req, res) => {
    axios.get(`https://developer.nps.gov/api/v1/parks?limit=498&api_key=${process.env.PARKKEY}`)
    .then(function (response) {
        for (let i=0; i < response.data.data.length; i++) {
            console.log(response.data.data[i].fullName)
            Park.create({
                parkname: response.data.data[i].fullName,
                // url: response.data.data[i].url,
                // description: response.data.data[i].description,
                image: response.data.data[i].images[0].url
            })
        }
        
    })
    res.redirect('/show')
  })
  

// // /API REQUEST AND SHOW ROUTE 
// router.get('/show', (req, res) => {
//     axios.get(`https://developer.nps.gov/api/v1/parks?limit=498&api_key=${process.env.PARKKEY}`)
//   .then(function (response) {
//     console.log(response.data.data[0].fullName);
//     Parks.create({
//         parkname: response.data.data[0].fullName,
//         url: response.data.data[0].url,
//         description: response.data.data[0].description,
//         image: response.data.data[0].images[0].url
//     })
//   res.redirect('/show')
//   })
//   .catch(function (error) {
//     // handle error
//     debugger
//     console.log(error);
//     debugger
//   })
//   .then(function () {
//     // always executed
//   })
//   .catch(function (error) {
//     // handle error
//     debugger
//     console.log(error);
//     debugger
//   })
// })


//INDEX/MAIN PAGE 
router.get('/', (req, res) => {
    Park.find({}, (err, allParks) => {
        res.render('parks/index.ejs', {
            parks: allParks, currentUser: req.session.currentUser
    })
}) 
})

//DISPLAYS ALL NATIONAL PARKS ON ONE PAGE
router.get('/show', (req, res) => {
    Park.find({}, (err, parks) => {
        res.render('parks/show.ejs', {
            allParks: parks, currentUser: req.session.currentUser 
        })
    })
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


//NEW ROUTE //CREATING A NEW COMMENT  //NEED API 
router.get('/favorites/new', (req,res) => {
    res.render('favorites/newComment.ejs')
})

//CREATE ROUTE //POSTING A NEW COMMENT ON THE FAVORITES PAGE //NEED API 
router.post('/favorites', (req, res) => {
    API.push(req.body)
    res.redirect('/favorites')
})

//EDIT ROUTE //EDIT COMMENT //NEED API
router.get('/favorites/:index/edit', (req, res) => {
    res.render('favorites/editComment.ejs')
})

//UPDATE ROUTE //UPDATE COMMENT //NEED API
router.put('/favorites/:index', (req, res) => {

})

//DELETE ROUTE //DELETE ONE COMMENT //NEED API
router.delete('/')


module.exports = router;