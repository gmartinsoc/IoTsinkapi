// EXPRESS
const express = require('express');
const router = express.Router();
const expressLayouts = require('express-ejs-layouts')

// SET INDEX ROUTER
router.get('/', function (req, res, next) {
        res.redirect("http://labnet.nce.ufrj.br/")
        //res.send("labnet the lab")
        //res.render('pages/home')
});

module.exports = router;