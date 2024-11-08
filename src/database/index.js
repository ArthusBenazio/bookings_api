require("dotenv").config();
const pgp = require("pg-promise")();
const { join } = require("node:path");

const db = pgp(process.env.DATABASE_URL);

const filePath = join(__dirname, "create-tables.sql");
const query = new pgp.QueryFile(filePath);

db.query(query);

module.exports = db;