import React, { useState, useEffect  } from 'react' 
import { useHistory } from 'react-router' 
import { createTable } from '../utils/api' 
import ErrorAlert from '../layout/ErrorAlert' 
import TableList from '../dashboard/TableList/TableList'
import { listTables } from '../utils/api'
import './Tables.css'

export default function Tables() {
    const history = useHistory() 
    const initForm = { table_name: '', capacity: 0 } 
    const [tableError, setTableError] = useState(null) 
    const [tableForm, setTableForm] = useState({ ...initForm }) 
    const [tables, setTables] = useState([])

    function handleFormChange(e) {
        setTableForm({
            ...tableForm,
            [e.target.name]: e.target.value,
        }) 
    }

    async function handleSubmit(e) {
        e.preventDefault() 
        const c = new AbortController() 
        try {
            tableForm.capacity = Number(tableForm.capacity) 
            const response = await createTable(tableForm, c.signal) 
            if (response) {
                setTables([...tables, response])
                history.push('/dashboard') 
            }
        } catch (error) {
            setTableError(error) 
        }
        return () => c.abort() 
    }

    function handleCancel() {
        history.goBack() 
    }

    useEffect(loadTables, [])

    function loadTables() {
        const abortController = new AbortController()  
        listTables(abortController.signal)
        .then(setTables)
        return () => abortController.abort() 
    }

    return (
        <>
        <div className='d-flex justify-content-center pt-3'>
            <h3>Create a New Table</h3>
        </div>
        <ErrorAlert error={tableError} />
        <form onSubmit={handleSubmit} className='d-flex justify-content-center'>
            <div>
                <input
                    type='text'
                    name='table_name'
                    className='form-control mb-1 input-table'
                    id='table_name'
                    placeholder='Table'
                    value={tableForm.table_name}
                    onChange={handleFormChange}
                    minLength={2}
                    required
                />
                <input
                    type='number'
                    name='capacity'
                    className='form-control mb-1 input-table'
                    id='capacity'
                    placeholder='Number of guests'
                    value={tableForm.capacity}
                    onChange={handleFormChange}
                    min='1'
                    required
                />            
                <div className='d-flex justify-content-center'>
                    <button type='submit' className='btn btn-success mr-1'>
                        Submit
                    </button>
                    <button
                        type='button'
                        className='btn btn-secondary'
                        onClick={handleCancel}
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </form>
        <TableList tables={tables} loadTables={loadTables} />
        </>
    ) 
}