const csv = require('csvtojson');
const Incident = require('../models/Incident');

function seedData() {
  return csv()
    .fromFile(__dirname + '/../../datasets/gun-violence-data_01-2013_03-2018.csv')
    .then(incidents => {
      return incidents.map(incident => ({
        date: incident.date,
        state: incident.state,
        cityOrCounty: incident.city_or_county,
        address: incident.address,
        numberKilled: incident.n_killed,
        numberInjured: incident.n_injured,
        gunStolen: incident.gun_stolen,
        gunType: incident.gun_type,
        incidentCharacteristics: incident.incident_characteristics,
        locationDescription: incident.location_description,
        numberOfGunsInvolved: incident.n_guns_involved,
        notes: incident.notes,
        participantAge: incident.participant_age,
        participantAgeGroup: incident.particpant_age_group,
        participantGender: incident.participant_gender,
        participantRelationship: incident.participant_relationship,
        participantStatus: incident.participant_status,
        participantType: incident.participant_type
      }));
    })
    .then(incidents => Incident.create(incidents));
}

module.exports = { seedData };
