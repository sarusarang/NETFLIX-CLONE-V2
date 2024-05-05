import React from 'react'
import './SignInform.css'
import { Link } from 'react-router-dom'
import { toast, Toaster } from 'sonner'
import { useState, useEffect } from 'react'
import { getuserdata } from '../SERVICES/Userapi'
import { useNavigate } from 'react-router-dom'

function SignInform() {

    const [data, setdata] = useState()

    const [inputdata, setinputdata] = useState({

        email: "", pass: ""

    })

    const [emailalert, setemailalert] = useState(false)

    const [passalert, setpassalert] = useState(false)

    const navigate = useNavigate()

    useEffect(() => {

        getdata()

    }, [])


    const getdata = async () => {

        const res = await getuserdata()

        setdata(res.data)

    }

    const handleinput = (e) => {

        const { name, value } = e.target

        if (name == "email") {

            setinputdata({ ...inputdata, email: value })
        }


        if (name == "pass") {

            setinputdata({ ...inputdata, pass: value })
        }

    }


    const handlesignin = () => {

        const { email, pass } = inputdata

        if (!email) {

            setemailalert(true)


        }
        else if (!pass) {

            setpassalert(true)

        }
        else {

            const found = data.find(item => (item.email == inputdata.email))

            if (found) {


                toast.success("LOGIN SUCCESS..!")

               

                setTimeout(() => {

                    navigate(`/profile/${found.id}`)

                }, 1000);

            }
            else {

                toast.error("INVAILD EMAIL OR PASSWORD...!!")

            }

        }

    }

    const handlesubmit = (e) => {

        e.preventDefault()
    }

    
    return (


        <>

            <div className='signIn-main'>

                <div className='signIn-background'>


                    {/* NAVBAR */}

                    <nav>

                        <div className=' p-4'>

                            <div className='nav-logo'>

                                <Link to={'/'}>

                                    <img src="/netflix-logo.png" className='img-fluid' alt="" />


                                </Link>


                            </div>

                        </div>


                    </nav>


                    {/* SignIn-Form */}


                    <section className='d-flex justify-content-center Signin-main'>

                        <div className='Signin'>


                            <div className='SignIn-form'>

                                <h1>Sign In</h1>

                                <div className='mt-4 SignIn-form-inner'>

                                    <form onSubmit={(e) => { handlesubmit(e) }}>

                                        <div className='signin-input'>

                                            <input onChange={(e) => { handleinput(e) }} autoComplete='off' name='email' type="email" placeholder='Email or Phone number' />

                                            {
                                                emailalert &&

                                                <h6 className='text-danger'>Empty Feild Please Enter Your Email</h6>

                                            }



                                        </div>

                                        <div className='signin-input'>

                                            <input type="password" onChange={(e) => { handleinput(e) }} autoComplete='off' name='pass' placeholder='Password' />

                                            {
                                                passalert &&

                                                <h6 className='text-danger'>Empty Feild Please Enter Your Password</h6>

                                            }


                                        </div>


                                        <button onClick={handlesignin} className='signin-btn-1'>Sign In</button>




                                        <p>OR</p>

                                        <div style={{ textAlign: 'center', marginBottom: '5%' }}>

                                            <a href="#">Forget password?</a>

                                        </div>

                                        <div className='signin-checkbox d-flex justify-content-start'>

                                            <input type="checkbox" />
                                            <label htmlFor="">Remember me</label>

                                        </div>

                                        <div className='newto-netflix'>

                                            <p>New to Netflix?

                                                <Link to={'/'}>

                                                    <a href="">Sign up now.</a>

                                                </Link>

                                            </p>

                                            <p className='Learn-more'>This page is protected by Google reCAPTCHA to ensure you're not a bot. <a href="">Learn more.</a></p>

                                        </div>



                                    </form>


                                </div>

                            </div>



                        </div>


                    </section>


                    {/* FOOTER */}

                    <section className='footer-signIN p-5'>


                        <div className='container p-5 foot-container'>

                            <p className='foot-p'>Questions? Call <a href="">000-800-919-1694</a></p>

                            <div className='row'>

                                <div className='col-md-3 col-6 foot-list'>

                                    <ul>

                                        <li><a href="">FAQ</a></li>
                                        <li><a href="">Cookie Preferences</a></li>

                                    </ul>

                                </div>


                                <div className='col-md-3 col-6 foot-list'>

                                    <ul>

                                        <li><a href="">Help Centre</a></li>
                                        <li><a href="">Corporate Information</a></li>


                                    </ul>

                                </div>


                                <div className='col-md-3 col-6 foot-list'>

                                    <ul>

                                        <li><a href="">Terms of Use</a></li>

                                    </ul>

                                </div>


                                <div className='col-md-3 col-6 foot-list'>

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

                </div>

                <Toaster richColors position='bottom-center' />

            </div>

        </>

    )
}

export default SignInform