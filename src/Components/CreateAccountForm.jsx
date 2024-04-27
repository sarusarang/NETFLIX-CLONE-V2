import React from 'react'
import './CreateAccount.css'
import { useState } from 'react'
import { userdata } from '../SERVICES/Userapi';
import { useNavigate } from 'react-router-dom';
import { toast, Toaster } from 'sonner'

function CreateAccountForm() {

  const [name, setname] = useState(false)
  const [email, seteamil] = useState(false)
  const [pass, setpass] = useState(false)




  const navigate = useNavigate()

  const [data, setdata] = useState({

    name: '', email: '', pass: '', history: [], profile: []


  })


  const [pro, setpro] = useState({

    profile1:''

  })

  const getuserdata = (e) => {

    const { name, value } = e.target

    if (name == "name") {

      setdata({ ...data, name: value })

      setpro({...pro,profile1:value})

    }

    if (name == "email") {

      setdata({ ...data, email: value })
    }

    if (name == "pass") {

      setdata({ ...data, pass: value })
    }

  }

  const senduserdata = async () => {

    const { name, email, pass } = data

    if (!name) {

      setname(true)

    }

    else if (!email) {

      seteamil(true)

    }

    else if (!pass) {

      setpass(true)

    }

    else if (data.email == data.pass) {

      toast.error("EMAIL & PSSWORD CANNOT BE SAME")

    }

    else {

      data.profile.push(pro)

      const res = await userdata(data)

      console.log(res.status);

      if (res.status >= 200 && res.status <= 300) {

        toast.success("ACCOUNT CREATED SUCCESSFULLY")

        setTimeout(() => {

          navigate(`/profile/${res.data.id}`)


        }, 1000);

      }

    }

  }

  const handlesubmit = (e) => {

    e.preventDefault()

  }


  return (

    <section className='w-100 d-flex justify-content-center'>

      <div className='w-50 d-flex form-width1 justify-content-center mt-5'>


        <div className='w-50 mb-5 form-width'>

          <div className='create-form'>


            <p>STEP <span>2</span> OF <span>2</span></p>

            <h1>Create a password to start your membership</h1>


            <div className='form-text'>

              <p>Just a few more steps and you're done! <br />
                We hate paperwork, too.
              </p>

            </div>

            <form onSubmit={(e) => { handlesubmit(e) }}>

              <div className='form-input'>

                <input type="text" name='name' onChange={(e) => { getuserdata(e) }} placeholder='Enter Your Name' />
                {
                  name &&

                  <h6 className='text-danger'>Empty Field please enter your Name</h6>


                }

              </div>


              <div className='form-input'>

                <input type="email" onChange={(e) => { getuserdata(e) }} name='email' placeholder='Email' />

                {
                  email &&

                  <h6 className='text-danger'>Empty Field please enter your Email</h6>


                }

              </div>


              <div className='form-input'>

                <input type="password" onChange={(e) => { getuserdata(e) }} name='pass' placeholder='Add a Password' />

                {
                  pass &&

                  <h6 className='text-danger'>Empty Field please enter your Password</h6>


                }

              </div>



              <button onClick={senduserdata} className='form-input-btn'>Create</button>


            </form>

          </div>

        </div>

      </div>

      <Toaster richColors position="bottom-right" />

    </section>


  )
}

export default CreateAccountForm