const db = require("../utils/db");
const nodemailer = require("nodemailer");

let mailTransporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "yuzentadashi@gmail.com",
    pass: "hzpx waqh vswi xqew",
  },
});

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

exports.findOldest = async function (req, res) {
  try {
    let result = await db.query(`SELECT * from users ORDER BY id ASC LIMIT 1`);
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

exports.create = async function (req, res) {
  try {
    let { nik, jenis_layanan, keluhan, email, no_phone, penjamin } = req.body;
    let result = await db.query(
      `INSERT INTO users (nik,jenis_layanan,keluhan,email,no_phone,penjamin) VALUES ($1,$2,$3,$4,$5,$6)`,
      [nik, jenis_layanan, keluhan, email, no_phone, penjamin]
    );
    res.status(201).json({
      message: "Record Created",
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
      `UPDATE users SET nik = $1, jenis_layanan = $2, keluhan = $3, email = $4, no_phone = $5, penjamin = $6 WHERE id = $7`,
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

exports.sendMail = async function (req, res) {
  let { email } = req.body;
  let mailDetails = {
    from: "yuzentadashi@gmail.com",
    to: email,
    subject: "Informasi penting pendaftaran puskesmas!",
    text: "Mohon segera datang ke puskesmas, nomor antrian anda segera dipanggil",
  };
  const findLast = await db.query(
    `SELECT * from users ORDER BY id ASC LIMIT 1`
  );
  const id = findLast.rows[0].id;
  try {
    mailTransporter.sendMail(mailDetails, async function (err, data) {
      if (err) {
        console.log("Error Occurs", err);
      } else {
        console.log("Email sent successfully");
        await db.query(`DELETE FROM users WHERE id = $1`, [id]);
      }
    });
    res.status(201).json({
      message: "Email sent successfully",
    });
  } catch (e) {
    res.status(413).json({
      message: "Error Occurred",
      error: e.toString(),
    });
  }
};
