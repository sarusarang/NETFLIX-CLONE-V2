import React from 'react'
import { useState, useEffect } from 'react';
import './Landing.css'
import { Languages } from 'lucide-react';
import { ChevronRight } from 'lucide-react';
import Collapsible from 'react-collapsible';
import { Plus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getuserdata } from '../SERVICES/Userapi';
import { useNavigate } from 'react-router-dom';


function Landing() {

    const [email, setemail] = useState("")
    const [checkemail, setcheckemail] = useState([])
    const navigate = useNavigate()

    useEffect(() => {

        getuser()
       
    },[])


    const getuser = async () => {

        const res = await getuserdata()

        setcheckemail(res.data)
        
    }



    const handlesubmit = (e) => {

        e.preventDefault()

    }

    const getemail = (e) => {

        const { name, value } = e.target
        setemail(value)

    }

    

    const check = () => {

        const found = checkemail.some(item=>(item.email === email))

        if(found){

            navigate('/signin')
        }
        else{

            navigate('/finish')
        }
    }

    return (

        <>

            <div className='w-100 main' style={{ height: '100vh' }}>



                <section className='hero-1'>


                    <div className='hero-bg'>

                        <nav>

                            <div className='p-4  d-flex justify-content-between'>


                                <div className='logo'>

                                    <img src="/netflix-logo.png" className='img-fluid' alt="" />

                                </div>

                                <div className='signin d-flex  align-items-center'>

                                    <div className='Lang ps-3 pe-3 pt-1 pb-1 d-flex'>

                                        <Languages className='lang-logo' size={'22'} color='#fff' />

                                        <select className='select'>

                                            <option label='English' value="">English</option>
                                            <option label='Hindi' value="">Hindi</option>

                                        </select>

                                    </div>

                                    <div>

                                        <Link to={'/signin'} className='signin-btn'>

                                            <button>Sign In</button>

                                        </Link>


                                    </div>

                                </div>

                            </div>

                        </nav>


                        <div className='hero-text'>

                            <h1 className='text-white text-center'>Unlimited movies,TV shows and more</h1>
                            <p className='text-white text-center'>Watch anywhere. Cancle anytime.</p>
                            <p className='text-white text-center'>Ready to watch? Enter your email to create or restart your membership</p>

                            <div className='d-flex justify-content-center'>

                                <div className='d-flex p-2 justify-content-center enter-email'>

                                    <form onSubmit={(e) => { handlesubmit(e) }}>

                                        <input type="email" autoComplete='off' onChange={(e) => { getemail(e) }} name='email' className='p-3 me-2' placeholder='Email address' /><br className='break' />


                                        <button onClick={check} className='p-1'>Get Started <ChevronRight size={'30'} /></button>


                                    </form>


                                </div>

                            </div>

                        </div>


                    </div>

                </section>


                {/* /* HERO-2 */}


                <section className='p-3 hero-2 d-flex justify-content-center' style={{ backgroundColor: 'black' }}>

                    <div className='container hero2-container'>

                        <div className='row p-3'>


                            <div className='col-lg-6  hero2-text align-middle'>

                                <h2>Enjoy on your TV</h2>
                                <p style={{ marginBottom: '0px' }}>Watch on smart TVs,Playstation,Xbox,Chromecast,Apple TV,Blu-ray players and more.</p>

                            </div>


                            <div className='col-lg-6'>

                                <div className='tv-img'>

                                    <img src="/tv.png" alt="" className='img-fluid' />

                                    <div className='tv-video'>

                                        <video autoPlay playsInline muted loop src="/HERO-2-VIDEO.m4v"></video>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </section>



                {/* HERO-3 */}

                <section className='hero-3' style={{ backgroundColor: 'black' }}>

                    <div className='container hero3-container p-4'>

                        <div className='row'>


                            <div className='col-lg-6 mt-5 hero3-text display1-hero3'>

                                <h2>Download your shows to watch offline</h2>
                                <p>Save your favourites easily and always have something to watch.</p>

                            </div>

                            <div className='col-lg-6 pt-3 pb-5 hero3-img d-flex flex-column justify-content-center'>

                                <div className='banner-img'>

                                    <img src="/HERO3-STRANGER-IMG.jpg" className='img-fluid' alt="logo" />

                                </div>



                                <div className='hero3-video d-flex justify-content-around p-2'>

                                    <div className='hero3-banner me-3'>

                                        <img src="/HERO3-STANGER-THINGS.png" className='img-fluid' alt="" />


                                    </div>

                                    <div className='hero3-banner-text d-flex flex-column justify-content-center me-5'>

                                        <div className='text-stranger'>
                                            Stranger Things
                                        </div>

                                        <div>
                                            <span>Downloading...</span>
                                        </div>

                                    </div>

                                    <div className='hero3-download d-flex'>

                                        <img src="/download-icon.gif" className='img-fluid' alt="" />

                                    </div>

                                </div>

                            </div>

                            <div className='col-lg-6 pt-3 pb-5 hero3-text display2-hero3'>

                                <h2>Download your shows to watch offline</h2>
                                <p>Save your favourites easily and always have something to watch.</p>

                            </div>

                        </div>

                    </div>

                </section>



                {/* HERO-4 */}

                <section style={{ backgroundColor: 'black' }} className='hero-4'>

                    <div className='container-fluid pt-4'>

                        <div className='row Hero4-row'>

                            <div className='col-lg-6 hero4-text'>

                                <h2>Watch everywhere</h2>

                                <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>

                            </div>


                            <div className='col-lg-6 hero4-banner'>

                                <img src="/hero-4-banner.png" className='img-fluid' alt="" />

                                <div className='hero4-video'>

                                    <video src="/HERO-4-video.m4v" autoPlay playsInline muted loop></video>

                                </div>

                            </div>

                        </div>

                    </div>


                </section>


                {/* HERO-5 */}

                <section className='hero-5'>

                    <div className='container-fluid '>

                        <div className='row hero5-row'>


                            <div className='col-lg-6 hero5-text hero5-display1'>

                                <h2>Create profile for kids</h2>
                                <p>Send children on adventures with their favourite characters in a space made just for them—free with  your membership.</p>

                            </div>


                            <div className='col-lg-6 hero5-banner'>

                                <img src="/hero-6-banner.png" alt="" className='img-fluid' />

                            </div>

                            <div className='col-lg-6 hero5-text hero5-display2'>

                                <h2>Create profile for kids</h2>
                                <p>Send children on adventures with their favourite characters <br /> in a space made just for them—free with <br /> your membership.</p>

                            </div>

                        </div>

                    </div>





                </section>




                {/* HERO-6 */}
                <section className='hero-6'>


                    <div className='hero6-collapse'>

                        <h2 className='mb-4'>Frequently Asked Questions</h2>


                        <div className='item-collapse'>


                            <ul>

                                <li className='mt-2'>

                                    <Collapsible trigger={["What is Netflix?", <Plus size={'36'} />]}>

                                        <p>
                                            Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.
                                        </p>

                                        <p>
                                            You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!
                                        </p>

                                    </Collapsible>

                                </li>


                                <li className='mt-2'>

                                    <Collapsible trigger={["How much does Netflix cost?", <Plus size={'36'} />]}>

                                        <p>
                                            Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts.
                                        </p>

                                    </Collapsible>

                                </li>


                                <li className='mt-2'>

                                    <Collapsible trigger={["Where can I watch?", <Plus size={'36'} />]}>

                                        <p>
                                            Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your
                                            personal computer or on any internet-connected device that offers the Netflix app,
                                            including smart TVs, smartphones, tablets, streaming media players and game consoles.</p>

                                        <p>You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're
                                            on the go and without an internet connection. Take Netflix with you anywhere.</p>

                                    </Collapsible>

                                </li>



                                <li className='mt-2'>

                                    <Collapsible trigger={["How do I cancel?", <Plus size={'36'} />]}>

                                        <p>
                                            Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online
                                            in two clicks. There are no cancellation fees – start or stop your account anytime.</p>
                                    </Collapsible>

                                </li>

                                <li className='mt-2'>

                                    <Collapsible trigger={["What Can I watch on Netflix?", <Plus size={'36'} />]}>

                                        <p>
                                            Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals,
                                            and more. Watch as much as you want, anytime you want.</p>
                                    </Collapsible>

                                </li>


                                <li className='mt-2'>

                                    <Collapsible trigger={["Is Netfilx good for kids?", <Plus size={'36'} />]}>

                                        <p>
                                            The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV
                                            shows and films in their own space.</p>

                                        <p>Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content
                                            kids can watch and block specific titles you don’t want kids to see.</p>

                                    </Collapsible>

                                </li>

                            </ul>

                        </div>


                        <div className='collapse-email mt-5'>

                            <h3>Ready to watch? Enter your email to create or restart your membership.</h3>

                            <div className='collapse-input mt-4'>

                                <form onSubmit={(e) => { handlesubmit(e) }}>

                                    <div className='row justify-content-center'>


                                        <div className='col-lg-6' style={{ padding: '0px' }}>

                                            <input type="email" autoComplete='off' onChange={(e) => { getemail(e) }} name='email' className='p-3 me-2' placeholder='Email address' /><br className='break' />

                                        </div>

                                        <div className='col-lg-4'>

                                            <button onClick={check} >Get Started <ChevronRight size={'30'} /></button>

                                        </div>

                                    </div>

                                </form>


                            </div>

                        </div>

                    </div>

                </section>


                <section className='footer pb-2'>

                    <div className='container foot-container'>

                        <p className='foot-p'>Questions? Call <a href="">000-800-919-1694</a></p>

                        <div className='row'>


                            <div className='col-md-3 col-6 foot-link'>

                                <ul>
                                    <li><a target="_blank" href="https://help.netflix.com/en/node/412">FAQ</a></li>
                                    <li><a target="_blank" href="https://ir.netflix.net/ir-overview/profile/default.aspx">Investor Relations</a></li>
                                    <li><a target="_blank" href="https://help.netflix.com/legal/privacy">Privacy</a></li>
                                    <li><a target="_blank" href="https://fast.com/">Speed Test</a></li>


                                    <select name="English" >


                                        <option value=""> English </option>
                                        <option value="">Hindi</option>

                                    </select>

                                    <li><p>Netflix India</p></li>

                                </ul>

                            </div>

                            <div className='col-md-3 col-6 foot-link'>

                                <ul>
                                    <li><a target="_blank" href="https://help.netflix.com/en/">Help Center</a></li>
                                    <li><a target="_blank" href="https://jobs.netflix.com/">Jobs</a></li>
                                    <li><a target="_blank" href="https://help.netflix.com/legal/privacy">Cookie Preferences</a></li>
                                    <li><a target="_blank" href="https://help.netflix.com/legal/notices">Legal Notices</a></li>
                                </ul>

                            </div>

                            <div className='col-md-3 col-6 foot-link'>

                                <ul>
                                    <li><a target="_blank" href="https://help.netflix.com/en/">Account</a></li>
                                    <li><a target="_blank" href="https://help.netflix.com/en/node/14361">Ways to Watch</a></li>
                                    <li><a target="_blank" href="https://help.netflix.com/en/node/134094">Corporate Information</a></li>
                                    <li><a target="_blank" href="https://www.netflix.com/in/browse/genre/839338">
                                        Only on Netflix</a></li>
                                </ul>

                            </div>


                            <div className='col-md-3 col-6 foot-link'>

                                <ul>
                                    <li><a target="_blank" href="https://help.netflix.com/en/">Media Centre</a></li>
                                    <li><a target="_blank" href="https://help.netflix.com/legal/termsofuse">Terms of Use</a></li>
                                    <li><a target="_blank" href="https://help.netflix.com/en/contactus">Contact Us</a></li>

                                </ul>

                            </div>


                        </div>

                    </div>


                </section>




            </div>

        </>

    )


}

export default Landing