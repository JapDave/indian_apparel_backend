const router = require('express').Router();

const { Contact } = require('../controller/appController.js')



//http req

router.post('/Contact', Contact)



module.exports= router;