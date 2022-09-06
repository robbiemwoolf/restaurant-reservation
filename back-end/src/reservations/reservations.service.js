const knex = require('../db/connection')

function list() {
    return knex('reservations as r')
        .select('*')
        .whereNotIn('status', ['finished', 'cancelled'])
        .orderBy('r.reservation_date')
}

function listByDate(reservation_date) {
    return knex('reservations as r')
        .select('*')
        .where({ reservation_date })
        .whereNotIn('status', ['finished', 'cancelled'])
        .orderBy('r.reservation_time')
}

function create(reservation) {
    return knex('reservations as r')
        .insert(reservation, '*')
        .then((newReservation) => newReservation[0])
}

function read(reservation_id) {
    return knex('reservations')
      .select('*')
      .where({ reservation_id })
      .first()
  }
  
  //only updates status
  function update(reservation_id, status) {
    return knex('reservations')
      .select('*')
      .where({ reservation_id })
      .update({ status })
      .returning('*')
      .then((updated) => updated[0])
  }
  
  function finish(reservation_id) {
    return knex('reservations')
      .select('*')
      .where({ reservation_id })
      .update({ status: 'finished' })
  }
  
  function search(mobile_number) {
    return knex('reservations')
      .whereRaw(
        "translate(mobile_number, '() -', '') like ?",
        `%${mobile_number.replace(/\D/g, '')}%`
      )
      .orderBy('reservation_date');
  }
  
  //updates when reservation is modified by user
  function modify(reservation_id, reservation) {
    return knex('reservations')
      .select('*')
      .where({ reservation_id })
      .update(reservation, '*')
      .returning('*')
      .then((updated) => updated[0]);
  }
  
  module.exports = {
    list,
    create,
    listByDate,
    read,
    finish,
    update,
    search,
    modify,
  };