const Course = require('../models/Course');
const {multipleMongooseToObject} = require('../../util/mongoose');
class SiteController {
    // method
    // GET
    // Get data from Database
    index(req, res,next) {
         // Writing by promise
         Course.find({})
         .then(courses => {
           res.render('home',{
               courses:multipleMongooseToObject(courses)
           });
         })
         .catch(next);
       
    }

    // GET, /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
