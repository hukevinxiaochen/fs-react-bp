const router = require('express').Router();

router.get('/', (req, res) => {
  res.send({message: "hello"})
})
module.exports = router;
