var jwt = require("jsonwebtoken");

var bcrypt = require("bcryptjs");
require("dotenv").config();

var db = require("../utils/db");

exports.register = function (req, res) {
  var { email, password } = req.body;
  var hashedPassword = bcrypt.hashSync(password, 8);
  db.query(
    "INSERT INTO auth(email, password) VALUES($1, $2)",
    [email, hashedPassword],
    function (error, results) {
      if (error) {
        res.status(413).json({
          message: "Error Occurred",
          error: error.toString(),
        });
      } else {
        res.json({
          message: "User created successfully",
        });
      }
    }
  );
};

exports.login = function (req, res) {
  var { email, password } = req.body;
  db.query(
    "SELECT * FROM auth WHERE email = $1",
    [email],
    function (error, results) {
      if (error) {
        res.status(413).json({
          message: "Error Occurred",
          error: error.toString(),
        });
      } else {
        if (results.rows.length > 0) {
          var user = results.rows[0];
          var passwordIsValid = bcrypt.compareSync(password, user.password);
          if (!passwordIsValid) {
            return res.status(401).json({
              message: "Invalid Password",
            });
          }
          var token = jwt.sign({ id: user.id }, process.env.SECRET, {
            expiresIn: 86400,
          });
          res.cookie("token", token, {
            maxAge: 86400,
            httpOnly: true,
          });
          res.json({
            message: "Login successful",
            token: token,
          });
        } else {
          res.status(404).json({
            message: "User not found",
          });
        }
      }
    }
  );
};
