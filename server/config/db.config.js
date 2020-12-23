module.exports = {
  HOST: 'db',
  USER: 'root',
  PASSWORD: '123456',
  DB: 'joox',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
