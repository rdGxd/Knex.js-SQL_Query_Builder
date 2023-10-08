/*
-- limit limita a qtd de valores
-- offset desloca o cursor para exibir os resultados
select id, first_name, email as uemail
from users
where id between 100 and 150
order by id asc
limit 9,3;
*/

const knex = require("../config/database.js");
const selectOrder = knex("users")
  .select("id", "first_name")
  .where("first_name", "like", "___")
  .orWhere("first_name", "like", "%na")
  .orderBy("id", "desc")
  .orderBy("first_name", "asc");

console.log(selectOrder.toString());

selectOrder
  .then((data) => {
    console.log(data);
  })
  .catch((e) => {
    console.log(e);
  })
  .finally(() => {
    knex.destroy();
  });
