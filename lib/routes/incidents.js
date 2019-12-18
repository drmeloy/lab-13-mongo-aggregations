const { Router } = require('express');
const Incident = require('../models/Incident');

module.exports = Router()
  .post('/', (req, res, next) => {
    Incident
      .create(req.body)
      .then(incident => res.send(incident))
      .catch(next);
  })
  .get('/:id', (req, res, next) => {
    Incident
      .findById(req.params.id)
      .then(incident => res.send(incident))
      .catch(next);
  })
  .get('/', (req, res, next) => {
    Incident
      .find()
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