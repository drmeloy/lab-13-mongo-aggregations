const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  date: Date,
  state: String,
  cityOrCounty: String,
  address: String,
  numberKilled: Number,
  numberInjured: Number,
  gunType: String,
  incidentCharacteristics: String,
  locationDescription: String,
  numberOfGunsInvolved: Number,
  notes: String,
  participantAge: String,
  participantGender: String,
  participantRelationship: String,
  participantStatus: String,
  participantType: String
})

module.exports = mongoose.model('Incident', schema);
