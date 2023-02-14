const router = require("express").Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});



router.use('/celebs', require('./celeb-routes'))
router.use('/movies', require('./movies-routes'))

module.exports = router;
