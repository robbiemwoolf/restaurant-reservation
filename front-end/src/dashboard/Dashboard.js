import React, { useEffect, useState } from 'react' 
import ReservationTable from './reservationTable/ReservationTable' 
import { listReservations, listTables } from '../utils/api' 
import ErrorAlert from '../layout/ErrorAlert' 
import { useHistory } from 'react-router-dom' 
import { previous, next } from '../utils/date-time'
import TableList from './TableList/TableList'

/**
 * Defines the dashboard page.
 * @param date
 *  the date for which the user wants to view reservations.
 * @returns {JSX.Element}
 */
function Dashboard({ date }) {
    const [reservations, setReservations] = useState([]) 
    const [tables, setTables] = useState([])
    const [reservationsError, setReservationsError] = useState(null) 
    const history = useHistory()

    useEffect(loadDashboard, [date])
    useEffect(loadTables, [])

    function loadDashboard() {
        const abortController = new AbortController() 
        setReservationsError(null) 
        listReservations({ date }, abortController.signal)
        .then(setReservations)
        .catch(setReservationsError) 
        return () => abortController.abort() 
    }

    function loadTables() {
        const abortController = new AbortController()  
        listTables(abortController.signal)
        .then(setTables)
        return () => abortController.abort() 
    }

    function handleToday() {
        history.push(`/dashboard`) 
    }

    function handlePrev() {
        const newDate = previous(date) 
        history.push(`/dashboard?date=${newDate}`) 
    }

    function handleNext() {
        history.push(`/dashboard?date=${next(date)}`) 
    }

    return (
        <main>
        <h1 className='d-flex justify-content-center'>Dashboard</h1>
        <div className='d-flex mb-3 justify-content-center'>
            <h4 className='mb-0'>Reservations for {date}</h4>
        </div>
        <div className='pb-2 d-flex justify-content-center'>
            <button className='btn btn-secondary mr-1' onClick={handlePrev}>
                previous
            </button>
            <button className='btn btn-secondary mr-1' onClick={handleToday}>
                today
            </button>
            <button className='btn btn-secondary' onClick={handleNext}>
                next
            </button>
        </div>
        <ErrorAlert error={reservationsError} />
        <div className='d-flex row justify-content-center'>
            <div className='col-6'>
                <ReservationTable
                    reservations={reservations}
                    setReservations={setReservations}
                    setError={setReservationsError}
                />
            </div>
            <div className='col-6'>
                <TableList tables={tables} loadTables={loadTables} />
            </div>
        </div>
        </main>
    ) 
}

export default Dashboard 