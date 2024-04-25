import React from 'react'
import './NetflixFooter.css'

function NetflixFooter() {
  return (


    <>


      {/* FOOTER */}

      <section className='footer-signIN Netflix-footer'>


        <div className='container p-5 foot-container'>



          <div className='Netflix-foot-icon mb-3'>

            <i className="fa-brands fa-facebook-f"></i>

            <i className="fa-brands fa-instagram"></i>

            <i className="fa-brands fa-x-twitter"></i>

            <i className="fa-brands fa-youtube"></i>

          </div>



          <div className='row'>

            <div className='col-md-3 col-6 foot-list Netflix-foot'>

              <ul>

                <li><a href="">Audio Description</a></li>
                <li><a href="">Investor Relations</a></li>
                <li><a href="">Legal Notices</a></li>

              </ul>

            </div>


            <div className='col-md-3 col-6 foot-list Netflix-foot'>

              <ul>

                <li><a href="">Help Centre</a></li>
                <li><a href="">Jobs</a></li>
                <li><a href="">Cookie Preferences</a></li>


              </ul>

            </div>


            <div className='col-md-3 col-6 foot-list Netflix-foot'>

              <ul>

                <li><a href="">Gift Card</a></li>
                <li><a href="">Terms of Use</a></li>
                <li><a href="">Corporate Information</a></li>

              </ul>

            </div>


            <div className='col-md-3 col-6 foot-list Netflix-foot'>

              <ul>

                <li><a href="">Media Center</a></li>
                <li><a href="">Privacy</a></li>
                <li><a href="">Contact Us</a></li>

              </ul>

            </div>


          </div>

          <button className='Netflix-foot-btn'>Service Code</button>

          <p className='copyright-netflix'>&copy;1997-2024 Netflix,Inc.</p>

        </div>

      </section>

    </>


  )
}

export default NetflixFooter