var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

router.get('/delete/:id', function(req, res, next) {
  console.log(req.params.id);
 knex('site').where({id: req.params.id}).del().then(function(data){
   res.redirect('/home');
 }).catch(function(error) {
     next(error);
 });
});
