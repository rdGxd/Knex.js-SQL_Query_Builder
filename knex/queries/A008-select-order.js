/*
-- Order ordena valores:
-- order by id asc (id crescente)
-- order by id desc (id decrescente)
-- order by id asc, first_name desc (prioriza o id)
select id, first_name, email as uemail
from users
where id between 100 and 150
order by first_name desc;
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
