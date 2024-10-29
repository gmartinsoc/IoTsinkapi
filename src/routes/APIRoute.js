// EXPRESS
const express = require('express');


const router = express.Router();

const controllerOne = require('../controllers/tcrudOne')
router.get('/tcrudOne/read', controllerOne.get);
router.post('/tcrudOne/create', controllerOne.post);
router.put('/tcrudOne/update', controllerOne.put);
router.delete('/tcrudOne/delete', controllerOne.delete);

const controllerView = require('../controllers/view_handler')
router.get('/api', controllerView.get);   

/*
const controllerMany = require('../controllers/tcrudMany')
router.get('/tcrudMany/read', controllerMany.get);
router.post('/tcrudMany/create', controllerMany.post);
router.put('/tcrudMany/update', controllerMany.put);
router.delete('/tcrudMany/delete', controllerMany.delete);
*/
module.exports = router;
