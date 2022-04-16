const Sequelize = require('sequelize');
const User = require('./user');
const Comment = require('./comments');

const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env]; // config/config.json에서 데이터베이스 설정을 불러온 후에 new Sequelize를 통해 MySQL 연결 객체를 생성한다.
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;

db.User = User;
db.Comment = Comment;

User.init(sequelize); // static 메서드 호출
Comment.init(sequelize); // static 메서드 호출

User.associate(db);
Comment.associate(db);

module.exports = db;