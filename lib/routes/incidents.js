const { Router } = require('express');
const Incident = require('../models/Incident');

module.exports = Router()
  .post('/', (req, res, next) => {
    Incident
      .create(req.body)
      .then(incident => res.send(incident))
      .catch(next);
  })
  .get('/number-of-incidents-in-:state', (req, res, next) => {
    const state = req.params.state;
    const search = state.charAt(0).toUpperCase() + state.slice(1, state.length);
    Incident
      .findState(search)
      .then(incidents => res.send(incidents))
      .catch(next);
  })
  .get('/number-of-incidents-by-state', (req, res, next) => {
    Incident
      .numberByState()
      .then(incidents => res.send(incidents))
      .catch(next);
  })
  .get('/number-of-deaths-by-state', (req, res, next) => {
    Incident
      .numKilledByState()
      .then(incidents => res.send(incidents))
      .catch(next);
  })
  .get('/number-of-deaths-in-:state', (req, res, next) => {
    const state = req.params.state;
    const search = state.charAt(0).toUpperCase() + state.slice(1, state.length);
    Incident
      .numKilledInState(search)
      .then(incidents => res.send(incidents))
      .catch(next);
  })
  .get('/:id', (req, res, next) => {
    Incident
      .findById(req.params.id)
      .then(incident => res.send(incident))
      .catch(next);
  })
  .get('/', (req, res, next) => {
    const { page = 1, perPage = 25 } = req.query;
    Incident
      .find()
      .limit(+perPage)
      .skip((+page - 1) * +perPage)
      .then(incidents => res.send(incidents))
      .catch(next);
  })
  .patch('/:id', (req, res, next) => {
    Incident
      .findByIdAndUpdate(req.params.id, req.body, { new: true })
      .then(incident => res.send(incident))
      .catch(next);
  })
  .delete('/:id', (req, res, next) => {
    Incident
      .findByIdAndDelete(req.params.id)
      .then(incident => res.send(incident))
      .catch(next);
  })