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

    const hoursAndMinutes = reservation_time.toString().split('').slice(0, 5)


    console.log(hoursAndMinutes)

    return (
        <tr>
            <th scope='row'>{reservation_id}</th>
            <td>{last_name},</td>
            <td>{first_name}</td>
            <td>{mobile_number}</td>
            <td className='text-center'>{people}</td>
            <td>{hoursAndMinutes}</td>
            <td data-reservation-id-status={reservation_id}>
                {status}
            </td>
            <td>
                {status === 'booked' ? (
                <a
                    className='btn btn-success'
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