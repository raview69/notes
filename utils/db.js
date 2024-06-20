const Pool = require("pg").Pool;
require("dotenv").config();

const pool = new Pool({
  user: process.env.USER,
  host: process.env.HOST,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: process.env.APP_PORT,
});

const createTable = async () => {
  const queryNotes = `CREATE TABLE notes (
	id int4 GENERATED ALWAYS AS IDENTITY( INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START 1 CACHE 1 NO CYCLE) NOT NULL,
	title varchar NOT NULL,
	datetime TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  note varchar NULL,
	CONSTRAINT notes_pk PRIMARY KEY (id)
)`;

  const queryCheckNotes = `SELECT * FROM notes`;

  pool.query(queryCheckNotes, (err, res) => {
    if (err) {
      pool.query(queryNotes, (err, res) => {
        if (err) {
          console.log(err);
        } else {
          console.log("Table notes created");
        }
      });
    } else {
      console.log("Table users already exists");
    }
  });
};

createTable();

module.exports = pool;
