// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();

const Celeb = require('../models/Celebrity.model')


router.get('/', async (req, res, next) => {
    try {
      const allCelebs = await Celeb.find()
      console.log(allCelebs)
      res.render('celebs/celebs', { allCelebs })
    } catch (error) {
      next(error)
    }
  })

router.get('/create', async (req, res, next) => {
    try {
      res.render('celebs/new-celeb')
    } catch (error) {
      next(error)
    }
  })
  

  router.post('/create', async (req, res, next) => {
    console.log(req.body)
    const celeb = {
        name: req.body.name,
        occupation: req.body.occupation,
        catchPhrase: req.body.catchPhrase
    }
    try {
      const addCeleb = await Celeb.create(celeb)
      res.redirect('/celebs')
    } catch (error) {
      next(error)
    }
  })



module.exports = router;