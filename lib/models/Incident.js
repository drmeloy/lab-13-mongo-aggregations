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

schema.statics.numberByState = function(order = 'desc'){
  return this.aggregate([
    {
      '$group': {
        '_id': '$state', 
        'count': {
          '$sum': 1
        }
      }
    }, {
      '$sort': {
        'count': order === 'asc' ? 1 : -1
      }
    }
  ])
}

schema.statics.findState = function(state){
  return this.aggregate([
    {
      '$group': {
        '_id': '$state', 
        'count': {
          '$sum': 1
        }
      }
    }, {
      '$match': {
        '_id': state
      }
    }
  ])
}

schema.statics.numKilledByState = function(order = 'desc'){
  return this.aggregate([
    {
      '$group': {
        '_id': '$state', 
        'numberKilled': {
          '$sum': '$numberKilled'
        }
      }
    }, {
      '$sort': {
        'numberKilled': order === 'asc' ? 1 : -1
      }
    }
  ])
}

schema.statics.numKilledInState = function(state){
  return this.aggregate([
    {
      '$group': {
        '_id': '$state', 
        'numberKilled': {
          '$sum': '$numberKilled'
        }
      }
    }, {
      '$match': {
        '_id': state
      }
    }
  ])
}

module.exports = mongoose.model('Incident', schema);
