const db = require("../utils/db");

exports.getAll = async function (req, res) {
  try {
    let result = await db.query(`SELECT * from users`);
    let data = result.rows;
    res.json({
      data,
    });
  } catch (e) {
    res.status(413).json({
      message: "Error Occurred",
      error: e.toString(),
    });
  }
};

exports.getSingle = async function (req, res) {
  try {
    let id = req.params.id;
    let result = await db.query(`SELECT * FROM users WHERE id = $1`, [id]);
    let data = result.rows;
    if (data.length > 0) {
      res.json(data[0]);
    } else {
      res.status(404).json({
        message: "Record not found",
      });
    }
  } catch (e) {
    res.status(413).json({
      message: "Error Occurred",
      error: e.toString(),
    });
  }
};

exports.create = async function (req, res) {
  try {
    let { nik, jenis_layanan, keluhan, email, no_phone, penjamin } = req.body;
    let result = await db.query(
      `INSERT INTO users (nik,jenis_layanan,keluhan,email,no_phone,penjamin) VALUES ($1,$2,$3,$4,$5,$6)`,
      [nik, jenis_layanan, keluhan, email, no_phone, penjamin]
    );
    res.status(201).json({
      message: "Record Inserted",
    });
  } catch (e) {
    res.status(413).json({
      message: "Error Occurred",
      error: e.toString(),
    });
  }
};

exports.updateSingle = async function (req, res) {
  try {
    let id = req.params.id;
    let { nik, jenis_layanan, keluhan, email, no_phone, penjamin } = req.body;
    let result = await db.query(
      `UPDATE users SET title = $1, description = $2 WHERE id = $3`,
      [nik, jenis_layanan, keluhan, email, no_phone, penjamin, id]
    );
    res.json({
      message: "Record Updated",
    });
  } catch (e) {
    res.status(413).json({
      message: "Error Occurred",
      error: e.toString(),
    });
  }
};

exports.deleteSingle = async function (req, res) {
  try {
    let id = req.params.id;
    let result = await db.query(`DELETE FROM users WHERE id = $1`, [id]);
    res.json({
      message: "Record Deleted",
    });
  } catch (e) {
    res.status(413).json({
      message: "Error Occurred",
      error: e.toString(),
    });
  }
};
