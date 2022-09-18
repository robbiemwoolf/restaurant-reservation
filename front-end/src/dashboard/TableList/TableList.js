import React from 'react' 
import TableInfo from './TableInfo' 
import './TableList.css'

export default function TableList({ tables, loadTables }) {
    if (!tables) {
        return null 
    }

    const formatted = tables.map((table) => {
        return (
            <TableInfo key={table.table_id} table={table} loadTables={loadTables} />
        ) 
    }) 

    return (
        <div className=''>
            {formatted}
        </div>
    ) 
}