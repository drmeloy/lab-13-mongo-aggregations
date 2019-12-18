const csv = require('csvtojson');
const Incident = require('../models/Incident');

function seedData() {
  return csv()
    .fromFile(__dirname + '/../datasets/gun-violence-data_01-2013_03-2018.csv')
    .then(incidents => {
      return incidents.map(incident => ({
        date: incident.date,
        address: incident.address,
        locationDescription: incident.location_description,
        state: incident.state,
        cityOrCounty: incident.city_or_county,
        numberInjured: incident.n_injured,
        numberKilled: incident.n_killed,
        incidentCharacteristics: incident.incident_characteristics,
        numberOfGunsInvolved: incident.n_guns_involved,
        gunType: incident.gun_type,
        notes: incident.notes,
        participantAge: incident.participant_age,
        participantGender: incident.participant_gender,
        participantRelationship: incident.participant_relationship,
        participantType: incident.participant_type,
        participantStatus: incident.participant_status
      }));
    })
    .then(incidents => Incident.create(incidents.slice(0, 100000)));
}

module.exports = { seedData };
