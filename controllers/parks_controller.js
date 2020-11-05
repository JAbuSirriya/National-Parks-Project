const express = require('express');
const mongoose =  require('mongoose');
const router = express.Router();
const axios = require('axios').default;
require('dotenv').config()
const Park = require('../models/parks.js')
const Comment = require('../models/comment.js');
const { update } = require('../models/parks.js');

router.get('/favicon.ico', (req, res, next) =>{
    res.status(404).send('No favicon here')
})

router.get('/seed', (req, res) => {
    axios.get(`https://developer.nps.gov/api/v1/parks?limit=498&api_key=${process.env.PARKKEY}`)
    .then(function (response) {
        for (let i=0; i < response.data.data.length; i++) {
            console.log(response.data.data[i].fullName)
            Park.create({
                parkname: response.data.data[i].fullName,
                url: response.data.data[i].url,
                description: response.data.data[i].description,
                image: response.data.data[i].images.length > 0 ? response.data.data[i].images[0].url : "https://cdn.pixabay.com/photo/2015/01/28/23/35/landscape-615429_960_720.jpg"
            })
        }
        
    })
    res.redirect('/show')
  })
  


//INDEX/MAIN PAGE 
router.get('/', (req, res) => {
    console.log(req.query.searchInput)
    let searchOptions = {}
    const searchInput = req.query.searchInput
    if (searchInput) {
        searchOptions.parkname = {"$regex":req.query.searchInput,"$options":"i"}
    } 
    Park.find(searchOptions, (err, allParks) => {
        res.render('parks/index.ejs',  { 
            searchInput: req.query.searchInput,
            parks: allParks, currentUser: req.session.currentUser
    })
}) 
})



 //CREATE ROUTE FOR COMMENT
 router.post('/:id', (req, res) => {
    req.body.park = req.params.id
    Comment.create(req.body, (err, wrotePost) => {
        if (err) {
            console.log(err)
        } else {
            res.redirect('back')}
    })
})



//DISPLAY EACH PARK INDIVIDUALLY
router.get('/:id', (req, res) => {
    parkID = req.params.id
    Park.findById(parkID, (err, foundPark) => {
          if(err){
              console.log(err)
          }else{
        Comment.find({park: mongoose.Types.ObjectId(foundPark.id)}, ( err, foundComment) => {
           res.render('parks/individualShow.ejs', {
                    park: foundPark, 
                    comment: foundComment,
                    currentUser: req.session.currentUser
                })
        })
    }
        })
    })


//UPDATE COMMENT ROUTE
router.put('/:id', (req, res) => {
    Comment.findByIdAndUpdate(req.params.id, req. body, {new: true}, (err, updateComment) => {
        res.redirect(updateComment.park), {
            currentUser: req.session.currentUser
        }
    })
})

//EDIT COMMENT ROUTE
router.get('/:id/edit', (req, res) => {
    Comment.findById(req.params.id, (err, foundComment) => {
        console.log(foundComment)
        res.render('parks/edit.ejs', {
            comment: foundComment,
            currentUser: req.session.currentUser
        })
    })
})


//DELETE COMMENT ROUTE 
router.delete('/:id', (req, res) => {
    console.log(req.params.id)
    Comment.findByIdAndDelete(req.params.id, { useFindAndModify: false}, (err, foundPark) => {
        if(err){
            console.log(err)
        }else{
            res.redirect('/')
        }
       
    })
})




module.exports = router;