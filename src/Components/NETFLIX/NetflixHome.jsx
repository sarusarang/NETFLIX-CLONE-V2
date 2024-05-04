import React, { Children } from 'react'
import './NetflixHome.css'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Offcanvas from 'react-bootstrap/Offcanvas';
import NetflixFooter from './NetflixFooter'
import BannerVideo from './BannerVideo';
import { useDispatch } from 'react-redux';
import { home, tvshows, movies, child } from '../../Store/Netflix';
import HomeVideos from './HomeVideos';
import { useSelector } from 'react-redux'
import TvShow from './TvShow';
import Movies from './Movies'
import Animated from './Animated';



function NetflixHome({ p, id }) {


    // TO HANDLE MULTIPLE SECTION SUCH AS MOVIE HOME..ECT WHEN A USERCLICKS
    const { HOME, TVSHOWS, MOVIES, CHILDREN } = useSelector((state) => state.netflix)

    // offfcanvas 
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // Handle navbar Scroll
    const [isScrolled, setIsScrolled] = useState(false);

    // To handle navbar scroll when its mounted
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            if (scrollPosition > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    // to set search btn mount and unmount
    const [input, setinput] = useState(false)
    const [searchbtn, setsearchbtn] = useState(true)


    // to handle search btn state
    const handleinput = () => {

        setinput(true)
        setsearchbtn(false)

    }

    // use dispatch

    const dispatch = useDispatch()



    return (
        <>

            <div className='Netflix-main'>


                {/* NAVBAR */}

                <section className={`netflix-navbar fixed-top ${isScrolled ? 'scrolled' : ''}`}>

                    <div className='container-fluid'>

                        <div className='row nav-display'>

                            <div className='col-6 d-flex align-items-center'>

                                <div className='netflix-navbar-logo'>

                                    <img src="/netflix-logo.png" className='img-fluid' alt="" />

                                </div>


                                <ul className='d-flex netflix-navlist'>

                                    <li><button className='multi-btn' onClick={() => { dispatch(home()) }}>Home</button></li>

                                    <li><button className='multi-btn' onClick={() => { dispatch(tvshows()) }}>Tv Shows</button></li>

                                    <li><button className='multi-btn' onClick={() => { dispatch(movies()) }}>Movies</button></li>

                                </ul>

                            </div>

                            <div className='col-6 d-flex justify-content-end'>

                                <div className='d-flex align-items-center'>


                                    <div>

                                        {

                                            searchbtn &&
                                            <button onClick={handleinput} className='Search-btn'><i className="fa-solid fa-magnifying-glass" style={{ color: '#fff' }}></i></button>
                                        }

                                        {
                                            input &&
                                            <div className='search-bar'>

                                                <button className='Search-btn'><i className="fa-solid fa-magnifying-glass" style={{ color: '#fff' }}></i></button>
                                                <input type="search" placeholder='Titles,People,genres' autoComplete='off' />

                                            </div>
                                        }

                                    </div>



                                    <button className='multi-btn me-3' onClick={() => { dispatch(child()) }}>Children</button>




                                    <div className='bell-drop'>

                                        <button className='bell-btn'><i class="fa-regular fa-bell" style={{ color: '#fff' }} ></i></button>

                                    </div>

                                    <div className='profile-drop dropdown'>

                                        <button><img src="/Profile.png" className='img-fluid' width={35} alt="" />  <i class="fa-solid fa-caret-up rotate" style={{ color: '#fff' }}></i></button>

                                        <div className='dropdown-content'>

                                            <div className="d-flex align-items-center mt-2">

                                                <i class="fa-solid fa-pencil me-4 prof-icon"></i>

                                                <Link to={`/profile/${id}`}>

                                                    <a href="">Manage Profiles</a>

                                                </Link>


                                            </div>


                                            <div className="d-flex align-items-center mt-3">

                                                <i class="fa-solid fa-arrow-up-right-from-square me-4 prof-icon"></i>

                                                <Link to={`/profile/${id}`}>

                                                    <a href="">Exit Profile</a>

                                                </Link>


                                            </div>


                                            <div className="d-flex align-items-center mt-3">

                                                <i class="fa-regular fa-circle-question me-4 prof-icon"></i>

                                                <Link to={'/netflix'}>

                                                    <a href="">Help Center</a>

                                                </Link>


                                            </div>



                                            <div className=' text-center p-2 mt-3' style={{ borderTop: '1px solid #393939cf' }}>

                                                <Link to={'/'}>

                                                    <a href="">Sign out of Netflix</a>

                                                </Link>


                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                        <div className='nav-display-2'>


                            <div className='row align-items-center'>

                                <div className='col-6 d-flex align-items-center'>

                                    <button className='btn' onClick={handleShow}><i class="fa-solid fa-bars fa-lg" style={{ color: '#fff' }}></i></button>

                                    <div className='mob-logo ms-2'>

                                        <img src="/netflix-logo.png" className='img-fluid' alt="" />

                                    </div>

                                </div>


                                <div className='col-6'>

                                    <div className='d-flex justify-content-end '>

                                        <input type="search" placeholder='Search' autoCapitalize='off' className='mob-search' />

                                    </div>

                                </div>


                                <Offcanvas className='mob-nav' show={show} onHide={handleClose}>

                                    <Offcanvas.Header closeButton>

                                        <div>


                                            <div className='mob-logo-2 mb-4'>

                                                <img src="/netflix-logo.png" className='img-fluid' alt="" />

                                            </div>

                                            <ul className='mob-list'>

                                                <li>

                                                    <div className='d-flex'>

                                                        <div className='mob-profile'>

                                                            <img src="/Profile.png" className='img-fluid' alt="" />

                                                        </div>

                                                        <div className='d-flex flex-column mob-profile-text ms-2'>

                                                            <p>{p}</p>

                                                            <Link to={`/profile/${id}`}>

                                                                <a href="">Switch Profiles</a>

                                                            </Link>

                                                        </div>

                                                    </div>

                                                </li>

                                                <li className='mt-2'><a href="">Help Center</a></li>
                                                <li><a href="">Sign Out of Netflix</a></li>

                                            </ul>

                                        </div>

                                    </Offcanvas.Header>

                                    <div style={{ borderTop: '1px solid rgb(57 56 56)' }}>

                                    </div>


                                    <Offcanvas.Body>

                                        <ul className='mob-list'>

                                            <li><button href="" onClick={() => { dispatch(home()) }}>Home</button></li>
                                            <li><button href="" onClick={() => { dispatch(movies()) }}>Movies</button></li>
                                            <li><button href="" onClick={() => { dispatch(tvshows()) }}>Tv Shows</button></li>
                                            <li><button href="" onClick={() => { dispatch(child()) }}>Children & Family</button></li>
                                            <li><button href="">Thirllers</button></li>
                                            <li><button href="">International Movies</button></li>
                                            <li><button href="">Dramas</button></li>
                                            <li><button href="">Horror</button></li>
                                            <li><button href="">Action</button></li>
                                            <li><button href="">Stand-up comedy</button></li>
                                            <li><button href="">Hollywood Movies</button></li>
                                            <li><button href="">Bollywood</button></li>
                                            <li><button href="">Made In India</button></li>
                                            <li><button href="">English Films</button></li>
                                            <li><button href="">Anime</button></li>
                                            <li><button href="">Hindi Movies & TV</button></li>


                                        </ul>

                                    </Offcanvas.Body>

                                </Offcanvas>


                            </div>

                        </div>

                    </div>

                </section>




                <section className='video-container'>

                    <BannerVideo />


                </section>


                {

                    HOME &&

                    <section className='Homecard'>

                        <HomeVideos p={p} />

                    </section>

                }

                {
                    TVSHOWS &&

                    <section className='Homecard'>

                        <TvShow p={p} />

                    </section>


                }


                {
                    MOVIES &&

                    <section className='Homecard'>

                        <Movies p={p} />

                    </section>


                }

                {
                    CHILDREN &&

                    <section className='Homecard'>

                        <Animated p={p} />

                    </section>


                }




                <section>

                    <NetflixFooter />


                </section>




            </div>





        </>



    )
}

export default NetflixHome