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

router.post('/',async function (req, res, next) {
  try {
    let { title, description} = req.body;
    let result = await db.query(`INSERT INTO categories (title,description) VALUES ($1,$2)`,[title,description])
    res.json({
      message: 'Record Inserted'
    })

  } catch (e) {
    res.status(413).json({
      message: 'Error Occurred',
      error: e.toString()
    })
  }
});

router.get('/:id',async function (req, res, next) {
  try {
    let id = req.params.id;
    let result = await db.query(`SELECT * FROM categories WHERE id = $1`,[id])
    let data = result.rows;
    if(data.length>0){
      res.json(data[0])
    }else{
      res.status(404).json({
        message: 'Record not found'
      });
    }
    
  } catch (e) {
    res.status(413).json({
      message: 'Error Occurred',
      error: e.toString()
    })
  }
});

module.exports = router;
