/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
        .createTable('listings', (table) => {
            table.increments('id').primary();
            table.string('price').notNullable();
            table.string('item_name').notNullable();
            table.string('item_title').notNullable();
            table.string('item_description').notNullable();
            table.boolean('is_firm').notNullable();
            table.timestamp('item_post_date').defaultTo(knex.fn.now());
            table.string('item_neighbourhood').notNullable();
            table.boolean('is_sold').notNullable().defaultTo(false);
        })
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('listings');
  
};
