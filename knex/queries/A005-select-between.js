/*
-- between seleciona um range
select * from users
where
created_at between
'2020-06-12 00:00:00'
and '2020-09-04 23:59:59'
and id between 163 and 210;
*/

const knex = require("../config/database.js");
const selectBetween = knex("users")
  .select("id", "first_name")
  .whereBetween("id", [80, 83])
  .orWhereBetween('first_name', [10, 15]);

console.log(selectBetween.toString());

selectBetween
  .then((data) => {
    console.log(data);
  })
  .catch((e) => {
    console.log(e);
  })
  .finally(() => {
    knex.destroy();
  });
