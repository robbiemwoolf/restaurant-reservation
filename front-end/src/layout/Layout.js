import React from 'react'
import Menu from './Menu' 
import Routes from './Routes'

/**
 * Defines the main layout of the application.
 *
 * You will not need to make changes to this file.
 *
 * @returns {JSX.Element}
 */
function Layout() {
    return (
        <div className='container-fluid row'>
                <div>
                    <Menu />
                </div>
                <div className='col-md-10'>
                    <Routes />
                </div>
        </div>
    )
}

export default Layout
