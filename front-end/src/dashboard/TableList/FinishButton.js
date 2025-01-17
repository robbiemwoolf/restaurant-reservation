import React from 'react' 
import { useHistory } from 'react-router' 
import { unassignTable } from '../../utils/api' 

export default function FinishButton({ status, table, loadTables }) {
    const history = useHistory() 

    async function handleClick() {
        return window.confirm(
            'Is this table ready to seat new guests? This cannot be undone.'
        )
        ? await handleFinish(table.table_id, table.reservation_id)
        : null 
    }

    async function handleFinish(table_id, reservation_id) {
        await unassignTable(table_id, reservation_id) 
        await loadTables() 
        history.push('/dashboard') 
    }

    return (
        status === 'Occupied' && (
        <div>
            <button
                data-table-id-finish={table.table_id}
                type='button'
                onClick={handleClick}
                className='btn btn-sm btn-success'
            >
                Finish
            </button>
        </div>
        )
    ) 
}