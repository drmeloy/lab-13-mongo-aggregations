const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  date: {
    type: Date,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  cityOrCounty: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  numberKilled: {
    type: Number,
    required: true
  },
  numberInjured: {
    type: Number,
    required: true
  },
  gunStolen: {
    type: Boolean,
    required: true
  },
  gunType: {
    type: String,
    required: true
  },
  incidentCharacteristics: {
    type: String,
    required: true
  },
  locationDescription: {
    type: String,
    required: true
  },
  numberOfGunsInvolved: {
    type: Number,
    required: true
  },
  notes: {
    type: String,
    required: true
  },
  participantAge: {
    type: Number,
    required: true
  },
  participantAgeGroup: {
    type: String,
    required: true
  },
  participantGender: {
    type: String,
    required: true
  },
  participantRelationship: {
    type: String,
    required: true
  },
  participantStatus: {
    type: String,
    required: true
  },
  participantType: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Incident', schema);
