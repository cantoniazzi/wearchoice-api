'use strict'

const routeClothing = require('./routes/clothing');
const routeLogin = require('./routes/login');

module.exports = function router(app, db) {
    routeClothing(app, db);
    routeLogin(app, db);
};