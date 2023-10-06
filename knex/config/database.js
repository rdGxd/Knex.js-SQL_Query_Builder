const knexfile = require("../../knexfile.js");
const knex = require("knex")(knexfile);

module.exports = knex

// knex('users').then(data => {
//   console.log(data)
// }); // SELECT * FROM users;
