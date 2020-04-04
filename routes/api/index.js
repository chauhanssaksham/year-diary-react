const express = require('express');
const router = express.Router();

router.use('/v1', require('./v1'));

// for any further routes, access from here
// router.use('/routerName', require('./routerfile));


module.exports = router;