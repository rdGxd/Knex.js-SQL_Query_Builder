/*
-- like (parecido)
-- % qualquer coisa
-- _ um caractere
select * from users
where first_name like '%ma%_';
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
