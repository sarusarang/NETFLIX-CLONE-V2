import React from 'react'
import './Profile.css'
import { CirclePlus } from 'lucide-react';
import { Trash } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { getuserdata } from '../SERVICES/Userapi';
import { pushprofile } from '../SERVICES/Userapi';
import { Toaster, toast } from 'sonner';

function Profile() {

    // TO MOUNT AND UNMOUNT PROFILE AND ADD PROFILE
    const [handleprofile, sethandleprofile] = useState(true)

    const [userobject, setuserobject] = useState([])

    // TO SET VALIDATION OF INPUT FEILD
    const [empty, setempty] = useState(false)

    // TO SET USERDATA TO THIS STATE
    const [userdata, setuserdata] = useState({})

    // TO UNMOUNT ADD PROFILE WHEN PROFILE NO IS 3
    const [addprofile, setaddprofile] = useState(true)

    // PROFILE DELETE STATE
    const [profilestate, setprofilestate] = useState({})

    // PROFILE PUSH STATE
    const [profilepush, setprofilepush] = useState({})


    const [getinput, setgetinput] = useState({

        profile1: ""

    })


    // TO get id of the user
    const { id } = useParams()

    // TO GET USERDATA FROM SERVR WHEN COMPONENT IS MOUNTED
    useEffect(() => {

        // TO GET DATA FROM THE SERVER OF THE USER corresponding ID
        const getuser = async () => {

            const res = await getuserdata()

            const profilenames = res.data.find(item => (item.id == id))

            setuserobject(profilenames.profile)

            setuserdata(profilenames)

            setpro1(profilenames.profile)

        }

        getuser()

    }, [id, profilestate, profilepush])


    // TO REFRESH THE PAGE WHEN THE LENGTH IS 3
    useEffect(() => {

        checkprofileno()
        // profiledelelength()

    }, [userobject])




    // TO CHECK THE LENGTH OF PROFILE
    const checkprofileno = () => {

        if (userobject.length === 3) {

            setaddprofile(false)

        }
        else {

            setaddprofile(true)
        }
    }


    // TO GET DATA FROM THE INPUT FIELD 
    const getprofilename = (e) => {

        const { name, value } = e.target

        setgetinput({ ...getinput, profile1: value })

    }

    // TO PUSH NEW PROFILE TO USERDATA
    const push = async () => {

        userdata.profile.push(getinput)

        await pushprofile(userdata, id)

        setprofilepush(userdata)

    }


    // TO UPDATE USERDATA WHEN BTN IS CLICKED
    const handleprofilesubmit = () => {

        if (!getinput) {

            setempty(true)

        }
        else if (userobject.length == 3) {

            toast.error("Maximum Number of profile Exceed")

            setTimeout(() => {

                sethandleprofile(true)

            }, 1000);

        }

        else {

            push()

            toast.success("PORFILE UPDATED SUCCESSFULLY")

            setTimeout(() => {

                sethandleprofile(true)

            }, 1000);
        }
    }


    // TO PREVENT DEFAULT BEHAVOUR OF FORM TAG
    const handlesubmit = (e) => {

        e.preventDefault()

    }

    // TO DELETE PROFILE 

    const deleteprofile = async (profile, index) => {

        const dele = userdata.profile.splice(index, 1)

        const deltepro = await pushprofile(userdata, id)

        setprofilestate(deltepro.data)

    }



    return (
        <>

            <div className='profile-main'>


                <div className='d-flex justify-content-center align-items-center'>


                    <div className='profile'>

                        {
                            handleprofile &&

                            <div className='profile-animation'>

                                <h1>Who's watching?</h1>

                                <div className='d-flex justify-content-center mt-5 profile-margin'>


                                    {
                                        userobject ?

                                            userobject.map((item, index) => (

                                                

                                                <div className='profile-user me-4'>

                                                   

                                                    <Link to={`/netflix/${id}?p=${item.profile1}`}>

                                                        <img src="/Profile.png" className='img-fluid' alt="" />

                                                    </Link>


                                                    <h4 className='tt'>{item.profile1}</h4>


                                                    <div className='text-center'>

                                                        <button onClick={() => { deleteprofile(item.profile1, index) }} className='btn-trash'><Trash size={'20'} /></button>

                                                    </div>


                                                </div>

                                            ))
                                            :

                                            <h1 className='text-danger'>ERROR</h1>
                                    }


                                  

                                    {

                                        addprofile &&

                                        <div className='profile-user ms-4' onClick={() => sethandleprofile(false)}>

                                            <CirclePlus className='plus' />
                                            <h4 className='tt'>Add Profile</h4>

                                        </div>


                                    }


                                </div>

                            </div>

                        }

                    </div>

                    {
                        !handleprofile &&



                        <div className='example-style profile-animation'>


                            <h1>Add Profile</h1>

                            <p>Add a Profile for another person watching Netflix.</p>

                            <form onSubmit={handlesubmit}>

                                <div className='add-profile d-flex align-items-center'>

                                    <div className='profile-add-img'>

                                        <img src="/Profile.png" className='img-fluid' alt="" />

                                    </div>

                                    <div className='add-input w-100 ms-4'>

                                        <input type="text" onChange={(e) => { getprofilename(e) }} placeholder='Name' name='name' />

                                        {

                                            empty &&

                                            <h6 className='text-danger'>Empty Field Please Enter Profile Name</h6>
                                        }

                                    </div>

                                </div>

                                <div className='d-flex align-items-center justify-content-start mt-4'>

                                    <button className='btn-continue' onClick={handleprofilesubmit}>Continue</button>
                                    <button className='btn-cancle' onClick={() => { sethandleprofile(true) }}>Cancle</button>

                                </div>

                            </form>


                        </div>

                    }

                </div>

                <Toaster richColors position='bottom-center' />

            </div>


        </>
    )
}

export default Profile