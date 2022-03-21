const express = require('express');
const Movie = require('../models/Movie.model');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

/*GET movies pages*/

router.get('/movies', async (req, res, next) => {
    const movies = await Movie.find()
  
    res.render('movies', { movies })
  });

/*GET each movie info page*/

router.get('/movie/:id', async (req, res, next) => {
    const movie = await Movie.findById(req.params.id)
  
    res.render('movie', { movie })
  })

  module.exports = router;
