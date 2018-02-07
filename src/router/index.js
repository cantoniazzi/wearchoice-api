'use strict'

const routeClothing = require('./routes/clothing');

module.exports = function router(app, db) {
    routeClothing(app, db);
};