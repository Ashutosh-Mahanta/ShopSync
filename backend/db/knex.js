const knex = require('knex');
const config = require('../knexfile'); // Load knexfile.js config

const db = knex(config.development);

module.exports = db;
