import React from 'react'
import './Footer.css'

function Footer() {
    return (

        <>

            {/* FOOTER */}

            <section className='footer-signIN-1 p-4'>


                <div className='container p-2 foot-container'>

                    <p className='foot-p1'>Questions? Call <a href="">000-800-919-1694</a></p>

                    <div className='row'>

                        <div className='col-md-3 col-6 foot-list1'>

                            <ul>

                                <li><a href="">FAQ</a></li>
                                <li><a href="">Cookie Preferences</a></li>

                            </ul>

                        </div>


                        <div className='col-md-3 col-6 foot-list1'>

                            <ul>

                                <li><a href="">Help Centre</a></li>
                                <li><a href="">Corporate Information</a></li>


                            </ul>

                        </div>


                        <div className='col-md-3 col-6 foot-list1'>

                            <ul>

                                <li><a href="">Terms of Use</a></li>

                            </ul>

                        </div>


                        <div className='col-md-3 col-6 foot-list1'>

                            <ul>

                                <li><a href="">Privacy</a></li>

                            </ul>

                        </div>


                    </div>

                    <select name="" id="">

                        <option value="">English</option>
                        <option value="">Hindi</option>

                    </select>

                </div>

            </section>

        </>

    )
}

export default Footer