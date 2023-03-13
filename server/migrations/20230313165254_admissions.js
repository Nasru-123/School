/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('admissions', (table) => {
        table.increments('admissionId').primary();
        table.string('firstName').notNullable()
        table.string('lastName')
        table.string('fatherName').notNullable()
        table.string('address')
        table.string('grade')
        table.string('gender')
        table.string('phoneNumber').notNullable()
        table.integer('age').notNullable()
        table.timestamp('createdAt').defaultTo(knex.fn.now());
        table.timestamp('updatedAt').defaultTo(knex.fn.now());
      })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('admissions')
};
