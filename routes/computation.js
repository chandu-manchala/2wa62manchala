var express = require('express');
var router = express.Router();

/* GET computation page. */
router.get('/', function (req, res, next) {
  var x;
  //var random = Math.random() * (3) + (-1);
  var random = Math.random();
  console.log(req.query.x);
  x = req.query.x;

  // checking if url has params
  if (x == undefined) {
    x = random;
  }


  
  let atan2 = Math.atan2(x) 
  let atanh =Math.atanh(x)
  let cbrt = Math.cbrt(x)
  
  res.render('computation', {
    title: 'Computation',
    values: `applied to ` + x + ` is ` + atan2 ,
    v1: `applied to ` + x + ` is ` + atanh,
    v2: `applied to ` + x + ` is ` + cbrt
   
  });
});

module.exports = router;
