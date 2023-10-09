/*
-- insert select
-- insere valores em uma tabela usando outra
insert into profiles
(bio, description, user_id)
select
concat('Bio de ', first_name),
concat('Description de', ' ', first_name),
id
from users;
*/

const knex = require("../config/database.js");
const insert = knex(
  // Toda vez que vc for receber dados do usuário use esses placeholders
  /*
  knex.raw("concat(??, ??)", ["Bio de ", "first_name"]),
  knex.raw("concat(??, ??)", ["Description de ", "last_name"]),
  */
  knex.raw("?? (??, ??, ??)", ["profiles", "bio", "description", "user_id"])
).insert((qb) => {
  qb.from("users").select(
    knex.raw("concat('Bio de ', ??)", ["first_name"]),
    knex.raw("concat('Description de ', ??)", ["last_name"]),
    "id"
  );
});

// console.log(insert.toString());

insert
  .then((data) => {
    console.log(data);
  })
  .catch((e) => {
    console.log(e.message);
  })
  .finally(() => {
    knex.destroy();
  });
