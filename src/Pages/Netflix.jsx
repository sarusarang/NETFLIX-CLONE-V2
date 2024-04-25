import React from 'react'
import { useParams } from 'react-router-dom'
import NetflixHome from '../Components/NETFLIX/NetflixHome'
import { useLocation } from 'react-router-dom'

function Netflix() {

  // TO GET THE ID AND USER PROFILE
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const p = searchParams.get('p');
  const {id} = useParams()



  return (

    <>

      <NetflixHome  p = {p} id={id}/>



    </>

  )
}

export default Netflix