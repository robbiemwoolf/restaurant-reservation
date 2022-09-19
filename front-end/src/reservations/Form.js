import React from 'react' 
import { useHistory } from 'react-router'
import './Form.css' 

export default function Form({
    initialformData,
    handleFormChange,
    handleSubmit,
}) {
    const history = useHistory() 

    const handleCancel = () => {
        history.goBack() 
    } 

    return (
        initialformData && (
        <form onSubmit={handleSubmit} className='form-group'>
            <fieldset>
            <legend className='d-flex justify-content-center'>
                Guest Information
            </legend>
            <div className='d-flex justify-content-center pb-1'>
                <input
                    type='text'
                    name='first_name'
                    className='form-control input-reservations'
                    id='first_name'
                    placeholder={initialformData?.first_name || 'First Name'}
                    value={initialformData?.first_name}
                    onChange={handleFormChange}
                    required
                />
            </div>
            <div className='d-flex justify-content-center pb-1'>
                <input
                    type='text'
                    name='last_name'
                    className='form-control input-reservations'
                    id='last_name'
                    placeholder={initialformData?.last_name || 'Last Name'}
                    value={initialformData?.last_name}
                    onChange={handleFormChange}
                    required
                />
            </div>
            <div className='d-flex justify-content-center pb-1'>
                <input
                    type='tel'
                    name='mobile_number'
                    className='form-control input-reservations'
                    id='mobile_number'
                    placeholder={initialformData?.mobile_number || 'Mobile Number'}
                    value={initialformData?.mobile_number}
                    onChange={handleFormChange}
                    required
                />
            </div>
            <div className='d-flex justify-content-center pb-1'>
                <input
                    type='number'
                    name='people'
                    className='form-control input-reservations'
                    id='people'
                    placeholder={initialformData?.people || 'Number of guests'}
                    value={initialformData?.people}
                    onChange={handleFormChange}
                    required
                    min='1'
                />
            </div>
            <div className='d-flex justify-content-center pb-1'>
                <input
                    type='date'
                    name='reservation_date'
                    className='form-control input-reservations'
                    id='reservation_date'
                    placeholder={initialformData?.reservation_date || 'YYY-MM-DD'}
                    value={initialformData?.reservation_date}
                    onChange={handleFormChange}
                    required
                />
            </div>
            <div className='d-flex justify-content-center pb-1'>
                <input
                    type='time'
                    name='reservation_time'
                    className='form-control input-reservations'
                    id='reservation_time'
                    placeholder={initialformData?.reservation_time || 'HH:MM'}
                    value={initialformData?.reservation_time}
                    onChange={handleFormChange}
                    required
                />
            </div>
            </fieldset>
            <div className='d-flex justify-content-center pt-2'>
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
        </form>
        )
    ) 
}