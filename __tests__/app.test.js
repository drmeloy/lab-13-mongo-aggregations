require('dotenv').config();

const request = require('supertest');
const app = require('../lib/app');
const connect = require('../lib/utils/connect');
const mongoose = require('mongoose');
const Incident = require('../lib/models/Incident');

describe('incidents routes', () => {
  beforeAll(() => {
    connect();
  });

  beforeEach(() => {
    return mongoose.connection.dropDatabase();
  });

  let incidentDate;
  let incident;
  beforeEach(async() => {
    incidentDate = new Date();
    incident = await Incident.create({
      date: incidentDate,
      state: 'Idaho',
      cityOrCounty: 'Ada',
      address: '456 E Blah Blah Ln',
      numberKilled: 0,
      numberInjured: 0,
      gunType: 'Rocket launcher',
      incidentCharacteristics: '\'Twas crazy!',
      locationDescription: 'Jim-Bob\'s farmhouse',
      numberOfGunsInvolved: 1,
      notes: 'Nobody knows where Jim-Bob got a rocket launcher. Everyone just glad nobody got hurt.',
      participantAge: '75',
      participantGender: 'Male',
      participantRelationship: 'Owner',
      participantStatus: 'Uninjured',
      participantType: 'Self-victim'
    });
  });

  afterAll(() => {
    return mongoose.connection.close();
  });

  it('can create a new incident', () => {
    const incidentDate = new Date();
    return request(app)
      .post('/api/v1/incidents')
      .send({
        date: incidentDate,
        state: 'Idaho',
        cityOrCounty: 'Ada',
        address: '456 E Blah Blah Ln',
        numberKilled: 0,
        numberInjured: 0,
        gunType: 'Rocket launcher',
        incidentCharacteristics: '\'Twas crazy!',
        locationDescription: 'Jim-Bob\'s farmhouse',
        numberOfGunsInvolved: 1,
        notes: 'Nobody knows where Jim-Bob got a rocket launcher. Everyone just glad nobody got hurt.',
        participantAge: '75',
        participantGender: 'Male',
        participantRelationship: 'Owner',
        participantStatus: 'Uninjured',
        participantType: 'Self-victim'
      })
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          date: incidentDate.toISOString(),
          state: 'Idaho',
          cityOrCounty: 'Ada',
          address: '456 E Blah Blah Ln',
          numberKilled: 0,
          numberInjured: 0,
          gunType: 'Rocket launcher',
          incidentCharacteristics: '\'Twas crazy!',
          locationDescription: 'Jim-Bob\'s farmhouse',
          numberOfGunsInvolved: 1,
          notes: 'Nobody knows where Jim-Bob got a rocket launcher. Everyone just glad nobody got hurt.',
          participantAge: '75',
          participantGender: 'Male',
          participantRelationship: 'Owner',
          participantStatus: 'Uninjured',
          participantType: 'Self-victim',
          __v: 0
        });
      });
  });
});
