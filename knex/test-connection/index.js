const knex = require("../config/database.js");

knex("users")
  .then((data) => {
    console.log(data);
  })
  .catch((e) => {})
  .finally(() => {
    knex.destroy()
  });
