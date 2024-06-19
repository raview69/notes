const Pool = require("pg").Pool;
require("dotenv").config();

const connectionString = `${process.env.DB_URL}`;

const pool = new Pool({
  connectionString: connectionString,
});

const createTable = async () => {
  const queryUsers = `CREATE TABLE users (
	id int4 GENERATED ALWAYS AS IDENTITY( INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START 1 CACHE 1 NO CYCLE) NOT NULL,
	nik varchar NOT NULL,
	jenis_layanan varchar NULL,
	email varchar NULL,
	keluhan varchar NULL,
	penjamin varchar NULL,
	no_phone varchar NULL,
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	CONSTRAINT users_pk PRIMARY KEY (id)
)`;

  const queryAuth = `CREATE TABLE auth (
	id int4 GENERATED ALWAYS AS IDENTITY( INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START 1 CACHE 1 NO CYCLE) NOT NULL,
	email varchar NOT NULL,
	password varchar NOT NULL,
	CONSTRAINT auth_pk PRIMARY KEY (id)
)`;

  const queryCheckUsers = `SELECT * FROM users`;
  const queryCheckAuth = `SELECT * FROM auth`;

  pool.query(queryCheckUsers, (err, res) => {
    if (err) {
      pool.query(queryUsers, (err, res) => {
        if (err) {
          console.log(err);
        } else {
          console.log("Table users created");
        }
      });
    } else {
      console.log("Table users already exists");
    }
  });

  pool.query(queryCheckAuth, (err, res) => {
    if (err) {
      pool.query(queryAuth, (err, res) => {
        if (err) {
          console.log(err);
        } else {
          console.log("Table auth created");
        }
      });
    } else {
      console.log("Table auth already exists");
    }
  });
};

createTable();

module.exports = pool;
