import React, { useState, useRef } from 'react'
import './Home.css'
import Slider from 'react-slick';
import { getmovie } from '../../SERVICES/Movie';
import { useEffect } from 'react';
import Card from 'react-bootstrap/Card';

function HomeVideos() {

  const [movie, setmovie] = useState([])

  useEffect(() => {

    get()

  }, [])

  const get = async () => {

    const res = await getmovie()
    setmovie(res.data.results)

  }

  console.log(movie);
  const posterUrl = `https://image.tmdb.org/t/p/w300`;



  // Function to go to the next slide
  const sliderRef = useRef();
  const next = () => {
    sliderRef.current.slickNext();
  };




  // SLIDER RESPONSIVE
  var settings = {

    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: false,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,

        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 481,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      }
    ]

  }


  return (


    <>
      <section className='main-slider'>


        {/*YOUNG ADULT TV SHOWS & MOVIES */}

        <div className='us-tvshows'>

          <h3>Young Adult Movies & Shows</h3>


          <div className='d-flex justify-content-center' style={{ position: "relative" }}>


            <Slider {...settings} ref={sliderRef}>

              {

                movie ?

                  movie.map(item => (


                    <Card className="bg-dark text-white" style={{ width: '18rem' }}>

                      <Card.Img src={`${posterUrl}${item.backdrop_path}`} alt="Card image" />

                      <Card.ImgOverlay>

                        <Card.Title>{item.title}</Card.Title>

                      </Card.ImgOverlay>

                    </Card>

                  ))

                  :

                  <h1 className='text-white'>Ops Something Went Wrong...</h1>

              }

            </Slider>

            <button className='next-btn' onClick={next} >

              <i class="fa-solid fa-angle-right fa-lg"></i>

            </button>

          </div>

        </div>


      </section>


    </>


  )




}

export default HomeVideos