/*
-- Update - Atualiza registros
update users set
first_name = 'Luiz',
last_name = 'Miranda'
where id between 119 and 121;

select * from users where id between 119 and 121;
 */

const knex = require("../config/database");
const select = knex.from("users").where("id", `=`, 29);
const update = knex("users")
  .update({ first_name: "Luiz", last_name: "Miranda" })
  .where({ id: 29 });
const update2 = knex("users").where({ id: 29 });

// Outra maneira de realizar o update
update2.update({
  first_name: "Luiz",
  last_name: "Miranda",
});

// console.log(select.toString());
// console.log(update.toString());

update
  .then((data) => {
    console.log(data);

    select
      .then((data) => {
        console.log(data);
      })
      .catch((e) => {
        console.log(e.message);
      });
  })
  .catch((e) => {
    console.log(e.message);
  })
  .finally(() => {
    knex.destroy();
  });
