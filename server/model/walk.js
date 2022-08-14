const db = require('../../database/index');

module.exports = {
  addWalk: (data) => {
    console.log('Model: addWalk, data = ', data);
    return db.create(data);
  },
  updateWalk: (filter, update) => {
    console.log('Model: updateWalk, filter = ', filter, ' update = ', update);
    return db.updateOne(filter, update, { upsert: true });
  },
  ifExist: (key) => {
    console.log('Model: ifExist, key = ', key);
    return db.exists(key);
  },
  getAllWalk: () => {
    console.log('Model: GET received');
    return db.find({});
  },
};
