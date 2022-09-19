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

    // put reservation time in xx:xx format
    const hoursAndMinutes = reservation_time.toString().split('').slice(0, 5)

    return (
        <div className='card d-flex res-card text-center m-2 py-4'>
            <b className='pb-3'>Reservation for {hoursAndMinutes}</b>
            <p>{last_name}, {first_name}</p>
            <p>Party of {people}</p>
            <p>{mobile_number}</p>
            <p data-reservation-id-status={reservation_id}>
                {status}
            </p>
            <div className='row d-flex justify-content-center'>
                {status === 'booked' ? (
                    <a
                        className='btn btn-success'
                        role='button'
                        href={`/reservations/${reservation_id}/seat`}
                    >
                        Seat
                    </a>
                ) : null}
                    <a
                        className='btn btn-secondary mx-2'
                        role='button'
                        href={`/reservations/${reservation_id}/edit`}
                    >
                        Edit
                    </a>
                <button
                    className='btn btn-danger'
                    data-reservation-id-cancel={reservation_id}
                    onClick={handleCancel}
                >
                    Cancel
                </button>
            </div>
        </div>
    )
}