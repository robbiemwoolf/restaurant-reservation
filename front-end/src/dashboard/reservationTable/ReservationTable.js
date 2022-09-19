import React from 'react' 
import ReservationRow from './ReservationRow' 
import { cancelReservation } from '../../utils/api' 
import { useHistory } from 'react-router-dom' 
import './Reservation.css'

export default function ReservationTable({
    reservations,
    setReservations,
    setError,
  }) {
    
    const history = useHistory()

    if (!reservations) {
      return null 
    }
  
    async function cancelRes(reservation) {
      try {
        const { status } = await cancelReservation(reservation.reservation_id) 
        const updated = reservations.map((res) => {
          if (res.reservation_id === reservation.reservation_id) {
            res.status = status 
          }
          return res 
        }) 
        setReservations(updated) 
        history.go(`/dashboard?date=${reservation.reservation_date}`) 
      } catch (error) {
        setError(error) 
      }
    }
  
    const formatted = reservations.map((res) => {
      return (
        <ReservationRow
          key={res.reservation_id}
          reservation={res}
          cancelRes={cancelRes}
        />
      ) 
    }) 
  
    return (
      <div className='d-flex justify-content-center flex-wrap my-2'>
        {formatted}
      </div>
    ) 
}