// starter code in both routes/celebrities.routes.js and routes/movies.routes.js

const router = require("express").Router();

const Movie = require('../models/Movies.model')


router.get('/movies', async (req, res, next) => {
    try {
      const allMovies = await Movie.find()
      console.log(allMovies)
      res.render('movies/movies', { allCelebs })
    } catch (error) {
      next(error)
    }
  })

router.get('/movies/create', async (req, res, next) => {
    try {
      res.render('movies/new-movie')
    } catch (error) {
      next(error)
    }
  })
  

  router.post('/movies/create', async (req, res, next) => {
    console.log(req.body)
    const movie = {
        title: req.body.title,
        genre: req.body.genre,
        plot: req.body.plot,
        cast: req.body.cast
    }
    try {
      const addMovie = await Movie.create(movie)
      res.redirect('/movies')
    } catch (error) {
      next(error)
    }
  })




module.exports = router;