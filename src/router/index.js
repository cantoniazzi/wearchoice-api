'use strict'

const routeClothing = require('./routes/clothing');
const routeLogin = require('./routes/login');
const routeVote = require('./routes/vote.js');

module.exports = function router(app, db) {
    routeClothing(app, db);
    routeLogin(app, db);
    routeVote(app, db);
};