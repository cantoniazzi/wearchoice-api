'use strict'

const Sequelize = require('sequelize');
const env = require('./env');
let sequelize = '';
if(process.env.NODE_ENV === 'development'){
    sequelize = new Sequelize(env.DATABASE_NAME, env.DATABASE_USERNAME, env.DATABASE_PASSWORD, {
      host: env.DATABASE_HOST,
      port: env.DATABASE_PORT,
      dialect: env.DATABASE_DIALECT || 'postgres',
      define: {
        underscored: true
      }
    });
}
else{
    sequelize = new Sequelize(process.env.DATABASE_URL, {dialect: 'postgres'});
}

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Models - tables
db.user = require('../models/user.js')(sequelize, Sequelize);
db.userSocialMedia = require('../models/userSocialMedia.js')(sequelize, Sequelize);
db.clothing = require('../models/clothing.js')(sequelize, Sequelize);
db.comment = require('../models/comment.js')(sequelize, Sequelize);
db.vote = require('../models/vote.js')(sequelize, Sequelize);

//Relations
db.userSocialMedia.belongsTo(db.user);
db.user.hasMany(db.userSocialMedia);

db.clothing.belongsTo(db.user);
db.user.hasMany(db.clothing);

db.user.hasMany(db.comment);
db.comment.belongsTo(db.user);

db.user.hasMany(db.vote);
db.vote.belongsTo(db.user);

module.exports = db;