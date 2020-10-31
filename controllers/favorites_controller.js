const express = require('express');
const router = express.Router();

//Add a park to the users favorite page


    //INDEX ROUTE //IN PARKS CONTROLLER 
        //favorites page holding all favorites items
        // index.ejs
    // router.get('/favorites', (req,res) => {
    //     res.render('views/favorites/index.ejs', { currentUser: req.session.currentUser })
    // })

    // DONT NEED THIS //EDIT and UPDATE ROUTES 
        //edit favorites list
        // EDIT.EJS

    //DELETE ROUTE //IN PARKS CONTROLLER 
        //delete item from favorites page

    //DELETE ROUTE //IN PARKS CONTROLLER 
        //delete all items on favorites page


    //comment on a favoite item

    //NEW ROUTE and CREATE ROUTE //IN PARKS CONTROLELR
        //create/add a comment to each park
        // newComment.ejs

    //EDIT and UPDATE ROUTES //IN PARKS CONTROLLER
        //edit a comment 
        //editComment.ejs
    

    //DELETE ROUTE
        //delete a comment 

    //DELETE ROUTE
        //delete all comments


    module.exports = router;