import React from 'react'
import { useParams } from 'react-router-dom'
import NetflixHome from '../Components/NETFLIX/NetflixHome'
import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

function Netflix() {

  const [video, setvideo] = useState(true)

  useEffect(() => {

    setTimeout(() => {

      setvideo(false)

    }, 5000);


  }, [])

  // TO GET THE ID AND USER PROFILE
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const p = searchParams.get('p');
  const { id } = useParams()



  return (

    <>

      {

        video &&

        <div style={{ width: '100%', height: '100vh', backgroundColor: '#141414' }}>


          <iframe allowFullScreen width={'100%'} height={'99%'} src="https://lottie.host/embed/36600a24-be9f-4e78-b872-7036de883ccf/uB38k1Tjnw.json"></iframe>

          

        </div>


      }



      {

        !video &&
        <NetflixHome p={p} id={id} />

      }





    </>

  )
}

export default Netflix