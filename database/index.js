const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/map', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', () => {
  console.log('DB conncectipn failed');
});

db.once('open', () => {
  console.log('DB connected!');
});

const mapSchema = mongoose.Schema({
  user: String,
  visitied: Number,
  rating: Number,
  photos: Array,
  date: String,
  lat: Number,
  lng: Number,
});

const Map = mongoose.model('Map', mapSchema);

module.exports = Map;
