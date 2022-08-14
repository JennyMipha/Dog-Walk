const express = require('express');

const router = express.Router();
const walk = require('./controller/walk');

router.post('/walk', (req, res) => {
  walk.addWalk(req, res);
});
router.get('/walk', (req, res) => {
  walk.getAllWalk(req, res);
});

module.exports = router;
