import React from 'react'
import './Finish.css'
import { Link } from 'react-router-dom'

function Finish() {
    return (

        <>


            <div className='finish-main'>

                <section className='w-100  d-flex justify-content-center'>


                    <div className='w-50 finish-width d-flex justify-content-center mt-5'>

                        <div className='w-50 mt-5 setting-up'>

                            <div className='setting-logo'>

                                <img className='img-fluid' src="/FINISH-BANNER.png" alt="" />

                            </div>

                            <div className='mt-5'>

                                <p>STEP <span>1</span> OF <span>2</span></p>
                                <h1>Finish setting up your account</h1>

                                <div className='text-p'>

                                    <p>Netflix is personalised for you. Create a password to watch on any device at any time.</p>

                                </div>

                                <Link to={'/create'}>

                                <button>Next</button>

                                </Link>

                               




                            </div>





                        </div>




                    </div>




                </section>

            </div>



        </>


    )
}

export default Finish