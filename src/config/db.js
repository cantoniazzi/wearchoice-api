'use strict'

const Sequelize = require('sequelize');
const env = require('./env');
const sequelize = new Sequelize(env.DATABASE_NAME, env.DATABASE_USERNAME, env.DATABASE_PASSWORD, {
  host: env.DATABASE_HOST,
  port: env.DATABASE_PORT,
  dialect: env.DATABASE_DIALECT,
  define: {
    underscored: true
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Models - tables
db.user = require('../models/user.js')(sequelize, Sequelize);
db.userSocialMedia = require('../models/userSocialMedia.js')(sequelize, Sequelize);

//Relations
db.userSocialMedia.belongsTo(db.user);
db.user.hasMany(db.userSocialMedia);

module.exports = db;