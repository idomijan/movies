const express = require('express');
const router = express.Router();
var knex = require('../db/connection');
const Joi = require('joi');

router.get('/', (req, res) => {
  knex
    .select()
    .from('movies')
    .then(function(movies) {
      res.send(movies);
    });
});

router.get('/:id/', (req, res) => {
  knex
    .first()
    .from('movies')
    .where('id', req.params.id)
    .then(function(movies) {
      res.send(movies);
    });
});

router.post('/', (req, res) => {
  const {error, value} = validateMovie(req.body);
  if (error) {
    res.status(400).send(error.details[0].message);
    return;
  }

  knex
    .select()
    .from('movies')
    .insert({
      name: value.name,
      genre: value.genre,
      rating: value.rating,
      explicit: value.explicit
    })
    .then(function() {
      knex
        .select()
        .from('movies')
        .then(function(movies) {
          res.send(movies);
        });
    });
});

router.put('/:id', (req, res) => {

  const {error, value} = validateMovie(req.body);
  if (error) {
    console.log(error.details[0].message);
    res.status(400).send(error.details[0].message);
    return;
  }

  knex
    .select()
    .from('movies')
    .where('id', req.params.id)
    .update({
      name: value.name,
      genre: value.genre,
      rating: value.rating,
      explicit: value.explicit
    })
    .then(function() {
      knex
        .select()
        .from('movies')
        .then(function(movies) {
          res.send(movies);
        });
    });
});

router.delete('/:id', (req, res) => {
  knex
    .select()
    .from('movies')
    .where('id', req.params.id)
    .del()
    .then(() => {
      knex
        .select()
        .from('movies')
        .then(function(movies) {
          res.send(movies);
        });
    });
});

function validateMovie(movie) {
  const schema = {
    name: Joi.string()
      .min(2)
      .required(),
    genre: Joi.string()
      .min(2)
      .required(),
    rating: Joi.number()
      .integer()
      .min(0)
      .max(10),
    explicit: Joi.boolean()
  };
  return Joi.validate(movie, schema);
}

module.exports = router;
