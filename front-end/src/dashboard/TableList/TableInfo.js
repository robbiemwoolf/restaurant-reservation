import React from 'react' 
import FinishButton from './FinishButton' 

export default function TableInfo({ table, loadTables }) {
    const status = table.reservation_id ? 'Occupied' : 'Free' 
    return (
        <div className= 'card p-3 my-4 mx-2 table-card text-white'>
            <div className='row'>
                <p className='col'>Table Name:</p>
                <p className='col text-right'>{table.table_name}</p>
            </div>
            <div className='row'>
                <p className='col'>ID:</p>
                <p className='col text-right'>{table.table_id}</p>
            </div>
            <div className='row'>
                <p className='col'>Capacity:</p>
                <p className='col text-right'>{table.capacity}</p>
            </div>
            <div className='row'>
                <p className='col' data-table-id-status={table.table_id}>Status:</p>
                <p className='col text-right'>{status}</p>
            </div>
            <div className='d-flex justify-content-center'>
                <FinishButton
                    status={status}
                    table={table}
                    loadTables={loadTables}
                />
            </div>
        </div>
    ) 
}