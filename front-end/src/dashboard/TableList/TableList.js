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
        <div className= 'card soften my-4'>
            <table className='table table-sm table-hover text-white'>
            <thead className='head'>
                <tr>
                <th scope='col'>#</th>
                <th scope='col'>Table</th>
                <th scope='col'>Capacity</th>
                <th scope='col'>Status</th>
                <th scope='col'>Finish</th>
                </tr>
            </thead>
            <tbody>{formatted}</tbody>
            </table>
        </div>
    ) 
}