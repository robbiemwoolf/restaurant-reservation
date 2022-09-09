import React from 'react'

export default function ReservationRow({ reservation, cancelRes }) {
  const { reservation_id, first_name, last_name, mobile_number, people, reservation_time, status } = reservation
  
  function handleCancel() {
    return window.confirm(
      'Do you want to cancel this reservation? This cannot be undone.'
    )
      ? cancelRes(reservation)
      : null
  }

  return (
    <tr>
      <th scope='row'>{reservation_id}</th>
      <td>{first_name}</td>
      <td>{last_name}</td>
      <td>{mobile_number}</td>
      <td>{people}</td>
      <td>{reservation_time}</td>
      <td data-reservation-id-status={reservation_id}>
        {status}
      </td>
      <td>
        {status === 'booked' ? (
          <a
            className='btn btn-secondary'
            role='button'
            href={`/reservations/${reservation_id}/seat`}
          >
            Seat
          </a>
        ) : null}
      </td>
      <td>
        <a
          className='btn btn-secondary'
          role='button'
          href={`/reservations/${reservation_id}/edit`}
        >
          Edit
        </a>
      </td>
      <td>
        <button
          className='btn btn-danger'
          data-reservation-id-cancel={reservation_id}
          onClick={handleCancel}
        >
          Cancel
        </button>
      </td>
    </tr>
  )
}