const express = require ('express');
const router = express.Router();
const Brand = require('../models/brands');

// get a list of brands from the db
router.get('/brands/:name', function(req, res, next){
    Brand.find({name: req.params.name}).then(function(brand){
      res.send(brand);
      }).catch(next);
});

router.get('/brands/:id', function(req, res, next){
    Brand.findOne({_id: req.params.id}).then(function(brand){
      res.send(brand);
    }).catch(next);
});

// add a new brand to the db
router.post('/brands', function(req, res, next){
    Brand.create(req.body).then(function(brand){
        res.send(brand);
    }).catch(next);
});

// update a brand in the db
router.put('/brands/:id', function(req, res, next){
  Brand.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(brand){
      Brand.findOne({_id: req.params.id}).then(function(brand){
        res.send(brand);
      });
  }).catch(next);
});

// delete a brand from the db, next
router.delete('/brands/:id', function(req, res, next){
    Brand.findByIdAndRemove({_id: req.params.id}).then(function(brand){
      res.send(brand);
    }).catch(next);
});

module.exports = router;
