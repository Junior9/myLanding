const express = require("express");
const router = express.Router();
const landindController = require('../controller/landing-controller');
const bodyParser = require('body-parser');

router.get('/list',landindController.list);
router.get('/page/:name/:id',landindController.page);
router.post('/create',bodyParser.json(),landindController.create);
router.delete('/delete/:id',bodyParser.json(),landindController.delete);

 
module.exports = router;