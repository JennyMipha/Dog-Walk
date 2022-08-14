const model = require('../model/walk');

module.exports = {
  addWalk: (req, res) => {
    console.log('Controller: POST received, req.body = ', req.body);
    const filter = {
      user: req.body.user,
      lat: req.body.lat,
      lng: req.body.lng,
    };

    const update = {
      photos: req.body.photos,
      date: req.body.date,
      rating: req.body.rating,
    };
    model.updateWalk(filter, update)
      .then(() => {
        console.log('DB POST success!');
        res.status(200).send();
      })
      .catch((err) => {
        console.log('DB POST failed err = ', err);
        res.status(501).send(err);
      });
  },
  getAllWalk: (req, res) => {
    console.log('Controller: GET received');
    model.getAllWalk()
      .then((result) => {
        console.log('DB GET success! result = ', result);
        res.status(200).send(result);
      })
      .catch((err) => {
        console.log('DB GET failed!, err = ', err);
        res.status(501).send(err);
      });
  },
};
