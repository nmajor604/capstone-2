/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable("sellers", function(table) {
    table.increments("id");
    table.string("seller").notNullable();
    table.string("password").notNullable();
  }).createTable('listings', (table) => {
    table.increments('id').primary();
    table.string('price').notNullable();
    table.string('image').notNullable();
    table.string('item_name').notNullable();
    table.string('item_title').notNullable();
    table.string('item_description').notNullable();
    table.integer("seller_id").unsigned().notNullable();
    table.boolean('is_firm').notNullable();
    table.timestamp('item_post_date').defaultTo(knex.fn.now());
    table.string('item_neighbourhood').notNullable();
    table.boolean('is_sold').notNullable().defaultTo(false);
    table  
        .foreign("seller_id")
        .references("id")
        .inTable("sellers")
});

  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable("listings").dropTable("sellers");
};
