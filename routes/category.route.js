const express = require('express');
const router = express.Router();
const db = require('../db')

router.get('/', async function (req, res, next) {
  try {
    let result = await db.query(`SELECT * from categories`)
    let data = result.rows;
    res.json({
      data
    })

  } catch (e) {
    res.status(413).json({
      message: 'Error Occurred',
      error: e.toString()
    })
  }
});

module.exports = router;
