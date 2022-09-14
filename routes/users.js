var express = require('express');
var router = express.Router();

/* GET users listing. */
// because our base path for user.js is "/users" and the route names concatenate, the final path for this route is going to be "localhost:3000/users/all"
router.get('/all', function(req, res, next) {
  res.send('respond with a resource');
});

// the final url for this route is going to be "/users/single"
router.get('/single', (req, res) => {
res.json({
  success: true,
  user: 'single user'
})
})


module.exports = router;
