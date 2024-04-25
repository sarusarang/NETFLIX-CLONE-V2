import React from 'react'
import './CreateNav.css'
import { Link } from 'react-router-dom'

function CreateACNavbar() {
    return (


        <>

            {/* NAVBAR */}

            <nav className='navbar'>

                <div className='d-flex justify-content-between w-100  finish-bar'>

                    <div className='finish-logo'>

                        <Link to={'/'}>

                            <img src="/netflix-logo.png" className='img-fluid' alt="" />

                        </Link>


                    </div>

                    <div className='finish-button'>

                        <Link to={'/signin'}>

                            <a href="">Sign In</a>

                        </Link>

                    </div>

                </div>

            </nav>

        </>



    )


}

export default CreateACNavbar