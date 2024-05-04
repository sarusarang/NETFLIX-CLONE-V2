import React, { useState, useRef } from 'react'
import './Home.css'
import Slider from 'react-slick';
import { adulttvshows, getseriesvideos, getmovievideos, discovermovies, getanimatedmovies, Populartvshows, Upcomingmovies, getanimatedseries, Topratedmovies, Trendingmovies, arrivingtoday } from '../../SERVICES/Movie';
import { useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { getuserdata, pushprofile } from '../../SERVICES/Userapi';
import { useParams } from 'react-router-dom';
import { Toaster} from 'sonner';

function HomeVideos({ p }) {


  const { id } = useParams()

  // History state
  const [history, sethistory] = useState([])
  const [checkhis, setcheckhis] = useState(false)
  const [hispop, sethispop] = useState([])



  // to identify its movie or series
  const movie = "movie"
  const series = "series"

  // Loading State
  const [loading, setloading] = useState(true)



  // state for storing movie datas
  const [adulttv, setadulttv] = useState([])
  const [dismovies, setdismovies] = useState([])
  const [animemovies, setanimemovies] = useState([])
  const [poptvshows, setpoptvshows] = useState([])
  const [upmovies, setupmovies] = useState([])
  const [animetv, setanimetv] = useState([])
  const [topmovies, settopmovies] = useState([])
  const [trendmovie, settrendmovie] = useState([])
  const [arrivingseries, setarrivingseries] = useState([])


  // To Load data when mounts
  useEffect(() => {

    getadulttvshows()
    getdismovies()
    getanimemovies()
    getpopulartvshows()
    getupcomingmovies()
    getanimetv()
    gettopmovies()
    gettrendmovies()
    getarrivingseries()

  }, [])


  useEffect(() => {

    // Check user History
    const checkhis = async () => {

      const res = await getuserdata()

      const his = res.data.find(item => item.id == id)

      sethispop(his.history)
      sethistory(his)

      if (his.history.length === 0) {

        setcheckhis(false)



      } else {

        setcheckhis(true)

      }

    }
    checkhis()

  }, [id, hispop])





  // Fetching movie data from Tmdb
  const getadulttvshows = async () => {

    try {

      const res = await adulttvshows()

      setadulttv(res.data.results)

      setloading(false)


    }
    catch (error) {

      toast.error("Failed To Fetch data From Server")


    }

  }


  const getdismovies = async () => {

    try {

      const res = await discovermovies()

      setdismovies(res.data.results)

      setloading(false)


    }
    catch (error) {

      toast.error("Failed To Fetch data From Server")


    }

  }


  const getanimemovies = async () => {

    try {

      const res = await getanimatedmovies()

      setanimemovies(res.data.results)

      setloading(false)


    }
    catch (error) {

      toast.error("Failed To Fetch data From Server")


    }

  }

  const getpopulartvshows = async () => {

    try {

      const res = await Populartvshows()

      setpoptvshows(res.data.results)

      setloading(false)


    }
    catch (error) {

      toast.error("Failed To Fetch data From Server")


    }

  }

  const getupcomingmovies = async () => {

    try {

      const res = await Upcomingmovies()

      setupmovies(res.data.results)

      setloading(false)


    }
    catch (error) {

      toast.error("Failed To Fetch data From Server")


    }

  }

  const getanimetv = async () => {

    try {

      const res = await getanimatedseries()

      setanimetv(res.data.results)

      setloading(false)


    }
    catch (error) {

      toast.error("Failed To Fetch data From Server")


    }

  }


  const gettopmovies = async () => {

    try {

      const res = await Topratedmovies()

      settopmovies(res.data.results)

      setloading(false)


    }
    catch (error) {

      toast.error("Failed To Fetch data From Server")


    }

  }

  const gettrendmovies = async () => {

    try {

      const res = await Trendingmovies()

      settrendmovie(res.data.results)

      setloading(false)


    }
    catch (error) {

      toast.error("Failed To Fetch data From Server")


    }

  }


  const getarrivingseries = async () => {

    try {

      const res = await arrivingtoday()

      setarrivingseries(res.data.results)

      setloading(false)


    }
    catch (error) {

      toast.error("Failed To Fetch data From Server")


    }

  }


  // to push history
  const pushhis = async (item) => {

    history.history.push(item)

    await pushprofile(history, id)

  }

  // Delete History
  const deltehis = async (index,name) => {

    history.history.splice(index, 1)

    const dele = pushprofile(history, id)

    toast.success(`${name} Removed From Continue Watching`)

  }






  // For Getting videos of the movies and series

  const getvideoid = async (id, status, item) => {

    let moviekey, serieskey;

    if (status == "movie") {

      const mov = await getmovievideos(id);
      moviekey = mov.data.results;

    } else {

      const ser = await getseriesvideos(id);
      serieskey = ser.data.results;

    }

    if (serieskey && serieskey.length > 0) {

      const Vid = serieskey[0];
      navigate(`/player?id=${Vid.key}`);
      console.log(Vid);

    } else if (moviekey && moviekey.length > 0) {

      const mov = moviekey[0];
      navigate(`/player?id=${mov.key}`);

    }

    pushhis(item)


  }



  const navigate = useNavigate()


  // POSTER BASE URL
  const posterUrl = `https://image.tmdb.org/t/p/w300`;



  // Function to go to the next slide
  const sliderRef = useRef(null);
  const sliderRef2 = useRef(null);
  const sliderRef3 = useRef(null);
  const sliderRef4 = useRef(null);
  const sliderRef5 = useRef(null);
  const sliderRef6 = useRef(null);
  const sliderRef7 = useRef(null);
  const sliderRef8 = useRef(null);
  const sliderRef9 = useRef(null);
  const sliderRef10 = useRef(null);

  const next = () => {
    sliderRef.current.slickNext();
  };

  const next2 = () => {
    sliderRef2.current.slickNext();
  };

  const next3 = () => {
    sliderRef3.current.slickNext();
  };

  const next4 = () => {
    sliderRef4.current.slickNext();
  };

  const next5 = () => {
    sliderRef5.current.slickNext();
  };

  const next6 = () => {
    sliderRef6.current.slickNext();
  };


  const next7 = () => {
    sliderRef7.current.slickNext();
  };

  const next8 = () => {
    sliderRef8.current.slickNext();
  };

  const next9 = () => {
    sliderRef9.current.slickNext();
  };

  const next10 = () => {
    sliderRef10.current.slickNext();
  };







  // SLIDER RESPONSIVE
  var settings = {

    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    arrows: false,

    responsive: [

      {
        breakpoint: 1200,
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




        {/* ADULT TV SHOWS */}

        {

          loading ?

            <div>

              <SkeletonTheme baseColor="#202020" highlightColor="#f10000" >

                <p style={{ marginBottom: '0px' }}>

                  <Skeleton duration={1.4} width={'95%'} borderRadius={'1rem'} />

                  <Skeleton duration={1.4} width={'85%'} borderRadius={'1rem'} />

                  <Skeleton duration={1.4} width={'80%'} borderRadius={'1rem'} />

                  <Skeleton duration={1.4} width={'75%'} borderRadius={'1rem'} />

                </p>

              </SkeletonTheme>



            </div>

            :

            <div className='us-tvshows'>

              <h3>Trending Tv Shows</h3>


              <div className='d-flex justify-content-center' style={{ position: "relative" }}>


                <Slider {...settings} ref={sliderRef}>

                  {

                    adulttv ?

                      adulttv.map(item => (

                        <div className='slider-item'>

                          <Card className="bg-dark text-white card-hoverable card-animation">

                            <Card.Img src={`${posterUrl}${item.backdrop_path}`} alt="Card image" />

                            <Card.ImgOverlay>

                              <Card.Title>{item.original_name}</Card.Title>

                            </Card.ImgOverlay>

                          </Card>


                          {/* HOVERD CARD */}


                          <Card className='hover-card' >

                            <Card.Img variant="top" src={`${posterUrl}${item.backdrop_path}`} />

                            <Card.Body>

                              <Button className='hover-btn' onClick={() => { getvideoid(item.id, series, item) }}><i class="fa-solid fa-play"></i></Button>


                              <Button className='hover-btn-plus'><i class="fa-solid fa-plus"></i></Button>

                              <Button className='hover-btn-plus'><i class="fa-regular fa-thumbs-up"></i></Button>

                              {/* <Button className='hover-btn-plus'  style={{ marginLeft: '4.1rem' }}><i class="fa-solid fa-angle-down"></i></Button> */}

                              <Card.Title className='mt-2'>{item.original_name}</Card.Title>

                              <Card.Text className='match'>95% Match  <span>{item.adult ? `U/A 18+` : "U/A 13+"}</span></Card.Text>

                            </Card.Body>

                          </Card>

                        </div>

                      ))

                      :
                      <h1 className='text-white'>Ops Something Went Wrong...</h1>

                  }

                </Slider>

                {/* NEXT BUTTON */}
                <button className='next-btn' onClick={next} >

                  <i class="fa-solid fa-angle-right fa-lg"></i>

                </button>

              </div>

            </div>
        }







        {/* SHOW HISTORY */}

        {

          checkhis && hispop.length >= 6 &&

          <div className='slide-h3'>

            <h3>Continue Watching For {p} </h3>


            <div className='d-flex justify-content-center' style={{ position: "relative" }}>


              <Slider {...settings} ref={sliderRef2}>

                {

                  hispop ?

                    hispop.map((item, index) => (

                      <div className='slider-item'>

                        <Card className="bg-dark text-white card-hoverable card-animation">

                          <Card.Img src={`${posterUrl}${item.backdrop_path}`} alt="Card image" />

                          <Card.ImgOverlay>

                            <Card.Title>{item.original_name ? item.original_name : item.original_title}</Card.Title>

                          </Card.ImgOverlay>

                        </Card>


                        {/* HOVERD CARD */}


                        <Card className='hover-card' >

                          <Card.Img variant="top" src={`${posterUrl}${item.backdrop_path}`} />

                          <Card.Body>

                            <Button className='hover-btn' onClick={() => { getvideoid(item.id, series, item) }}><i class="fa-solid fa-play"></i></Button>


                            <Button className='hover-btn-plus'><i class="fa-solid fa-plus"></i></Button>

                            <Button className='hover-btn-plus'><i class="fa-regular fa-thumbs-up"></i></Button>

                            <Button className='hover-btn-plus' onClick={() => { deltehis(index,item.original_name ? item.original_name : item.original_title) }} style={{ marginLeft: '4.1rem' }}><i class="fa-solid fa-xmark"></i></Button>

                            <Card.Title className='mt-2'>{item.original_name ? item.original_name : item.original_title}</Card.Title>

                            <Card.Text className='match'>95% Match  <span>{item.adult ? `U/A 18+` : "U/A 13+"}</span></Card.Text>

                          </Card.Body>

                        </Card>

                      </div>

                    ))

                    :
                    <h1 className='text-white'>Ops Something Went Wrong...</h1>

                }

              </Slider>

              {/* NEXT BUTTON */}
              <button className='next-btn' onClick={next2} >

                <i class="fa-solid fa-angle-right fa-lg"></i>

              </button>

            </div>

          </div>

        }









        {/* Discover Movies */}

        {

          loading ?

            <div className='mt-4'>

              <SkeletonTheme baseColor="#202020" highlightColor="#f10000" >

                <p style={{ marginBottom: '0px' }}>

                  <Skeleton duration={1.4} width={'95%'} borderRadius={'1rem'} />

                  <Skeleton duration={1.4} width={'85%'} borderRadius={'1rem'} />

                  <Skeleton duration={1.4} width={'80%'} borderRadius={'1rem'} />

                  <Skeleton duration={1.4} width={'75%'} borderRadius={'1rem'} />

                </p>

              </SkeletonTheme>



            </div>

            :

            <div className='slide-h3'>

              <h3>Movies You Like</h3>


              <div className='d-flex justify-content-center' style={{ position: "relative" }}>


                <Slider {...settings} ref={sliderRef3}>

                  {

                    dismovies ?

                      dismovies.map(item => (

                        <div className='slider-item'>

                          <Card className="bg-dark text-white card-hoverable card-animation">

                            <Card.Img src={`${posterUrl}${item.backdrop_path}`} alt="Card image" />

                            <Card.ImgOverlay>

                              <Card.Title>{item.original_title ? item.original_title : item.original_name}</Card.Title>

                            </Card.ImgOverlay>

                          </Card>


                          {/* HOVERD CARD */}


                          <Card className='hover-card' >

                            <Card.Img variant="top" src={`${posterUrl}${item.backdrop_path}`} />

                            <Card.Body>

                              <Button className='hover-btn' onClick={() => { getvideoid(item.id, movie, item) }}><i class="fa-solid fa-play"></i></Button>


                              <Button className='hover-btn-plus'><i class="fa-solid fa-plus"></i></Button>

                              <Button className='hover-btn-plus'><i class="fa-regular fa-thumbs-up"></i></Button>

                              {/* <Button className='hover-btn-plus'  style={{ marginLeft: '4.1rem' }}><i class="fa-solid fa-angle-down"></i></Button> */}

                              <Card.Title className='mt-2'>{item.original_title ? item.original_title : item.original_name}</Card.Title>

                              <Card.Text className='match'>95% Match  <span>{item.adult ? `U/A 18+` : "U/A 13+"}</span></Card.Text>

                            </Card.Body>

                          </Card>

                        </div>

                      ))

                      :
                      <h1 className='text-white'>Ops Something Went Wrong...</h1>

                  }

                </Slider>

                {/* NEXT BUTTON */}
                <button className='next-btn' onClick={next3} >

                  <i class="fa-solid fa-angle-right fa-lg"></i>

                </button>

              </div>

            </div>
        }








        {/* Animated Movies */}

        {

          loading ?

            <div className='mt-4'>

              <SkeletonTheme baseColor="#202020" highlightColor="#f10000" >

                <p style={{ marginBottom: '0px' }}>

                  <Skeleton duration={1.4} width={'95%'} borderRadius={'1rem'} />

                  <Skeleton duration={1.4} width={'85%'} borderRadius={'1rem'} />

                  <Skeleton duration={1.4} width={'80%'} borderRadius={'1rem'} />

                  <Skeleton duration={1.4} width={'75%'} borderRadius={'1rem'} />

                </p>

              </SkeletonTheme>



            </div>

            :

            <div className='slide-h3'>

              <h3>Animated Movies</h3>


              <div className='d-flex justify-content-center' style={{ position: "relative" }}>


                <Slider {...settings} ref={sliderRef4}>

                  {

                    animemovies ?

                      animemovies.map(item => (

                        <div className='slider-item'>

                          <Card className="bg-dark text-white card-hoverable card-animation">

                            <Card.Img src={`${posterUrl}${item.backdrop_path}`} alt="Card image" />

                            <Card.ImgOverlay>

                              <Card.Title>{item.original_title ? item.original_title : item.original_name}</Card.Title>

                            </Card.ImgOverlay>

                          </Card>


                          {/* HOVERD CARD */}


                          <Card className='hover-card' >

                            <Card.Img variant="top" src={`${posterUrl}${item.backdrop_path}`} />

                            <Card.Body>

                              <Button className='hover-btn' onClick={() => { getvideoid(item.id, movie, item) }}><i class="fa-solid fa-play"></i></Button>


                              <Button className='hover-btn-plus'><i class="fa-solid fa-plus"></i></Button>

                              <Button className='hover-btn-plus'><i class="fa-regular fa-thumbs-up"></i></Button>

                              {/* <Button className='hover-btn-plus'  style={{ marginLeft: '4.1rem' }}><i class="fa-solid fa-angle-down"></i></Button> */}

                              <Card.Title className='mt-2'>{item.original_title ? item.original_title : item.original_name}</Card.Title>

                              <Card.Text className='match'>95% Match  <span>{item.adult ? `U/A 18+` : "U/A 13+"}</span></Card.Text>

                            </Card.Body>

                          </Card>

                        </div>

                      ))

                      :
                      <h1 className='text-white'>Ops Something Went Wrong...</h1>

                  }

                </Slider>

                {/* NEXT BUTTON */}
                <button className='next-btn' onClick={next4} >

                  <i class="fa-solid fa-angle-right fa-lg"></i>

                </button>

              </div>

            </div>
        }




        {/* Popluar Tv shows*/}

        {

          loading ?

            <div className='mt-4'>

              <SkeletonTheme baseColor="#202020" highlightColor="#f10000" >

                <p style={{ marginBottom: '0px' }}>

                  <Skeleton duration={1.4} width={'95%'} borderRadius={'1rem'} />

                  <Skeleton duration={1.4} width={'85%'} borderRadius={'1rem'} />

                  <Skeleton duration={1.4} width={'80%'} borderRadius={'1rem'} />

                  <Skeleton duration={1.4} width={'75%'} borderRadius={'1rem'} />

                </p>

              </SkeletonTheme>



            </div>

            :

            <div className='slide-h3'>

              <h3>International Tv Shows</h3>


              <div className='d-flex justify-content-center' style={{ position: "relative" }}>


                <Slider {...settings} ref={sliderRef5}>

                  {

                    poptvshows ?

                      poptvshows.map(item => (

                        <div className='slider-item'>

                          <Card className="bg-dark text-white card-hoverable card-animation">

                            <Card.Img src={`${posterUrl}${item.backdrop_path}`} alt="Card image" />

                            <Card.ImgOverlay>

                              <Card.Title>{item.original_title ? item.original_title : item.original_name}</Card.Title>

                            </Card.ImgOverlay>

                          </Card>


                          {/* HOVERD CARD */}


                          <Card className='hover-card' >

                            <Card.Img variant="top" src={`${posterUrl}${item.backdrop_path}`} />

                            <Card.Body>

                              <Button className='hover-btn' onClick={() => { getvideoid(item.id, series, item) }}><i class="fa-solid fa-play"></i></Button>


                              <Button className='hover-btn-plus'><i class="fa-solid fa-plus"></i></Button>

                              <Button className='hover-btn-plus'><i class="fa-regular fa-thumbs-up"></i></Button>

                              {/* <Button className='hover-btn-plus'  style={{ marginLeft: '4.1rem' }}><i class="fa-solid fa-angle-down"></i></Button> */}

                              <Card.Title className='mt-2'>{item.original_title ? item.original_title : item.original_name}</Card.Title>

                              <Card.Text className='match'>95% Match  <span>{item.adult ? `U/A 18+` : "U/A 13+"}</span></Card.Text>

                            </Card.Body>

                          </Card>

                        </div>

                      ))

                      :
                      <h1 className='text-white'>Ops Something Went Wrong...</h1>

                  }

                </Slider>

                {/* NEXT BUTTON */}
                <button className='next-btn' onClick={next5} >

                  <i class="fa-solid fa-angle-right fa-lg"></i>

                </button>

              </div>

            </div>
        }







        {/* Upcoming Movies*/}

        {

          loading ?

            <div className='mt-4'>

              <SkeletonTheme baseColor="#202020" highlightColor="#f10000" >

                <p style={{ marginBottom: '0px' }}>

                  <Skeleton duration={1.4} width={'95%'} borderRadius={'1rem'} />

                  <Skeleton duration={1.4} width={'85%'} borderRadius={'1rem'} />

                  <Skeleton duration={1.4} width={'80%'} borderRadius={'1rem'} />

                  <Skeleton duration={1.4} width={'75%'} borderRadius={'1rem'} />

                </p>

              </SkeletonTheme>



            </div>

            :

            <div className='slide-h3'>

              <h3>UpComing Movies</h3>


              <div className='d-flex justify-content-center' style={{ position: "relative" }}>


                <Slider {...settings} ref={sliderRef6}>

                  {

                    upmovies ?

                      upmovies.map(item => (

                        <div className='slider-item'>

                          <Card className="bg-dark text-white card-hoverable card-animation">

                            <Card.Img src={`${posterUrl}${item.backdrop_path}`} alt="Card image" />

                            <Card.ImgOverlay>

                              <Card.Title>{item.original_title ? item.original_title : item.original_name}</Card.Title>

                            </Card.ImgOverlay>

                          </Card>


                          {/* HOVERD CARD */}


                          <Card className='hover-card' >

                            <Card.Img variant="top" src={`${posterUrl}${item.backdrop_path}`} />

                            <Card.Body>

                              <Button className='hover-btn' onClick={() => { getvideoid(item.id, movie, item) }}><i class="fa-solid fa-play"></i></Button>


                              <Button className='hover-btn-plus'><i class="fa-solid fa-plus"></i></Button>

                              <Button className='hover-btn-plus'><i class="fa-regular fa-thumbs-up"></i></Button>

                              {/* <Button className='hover-btn-plus'  style={{ marginLeft: '4.1rem' }}><i class="fa-solid fa-angle-down"></i></Button> */}

                              <Card.Title className='mt-2'>{item.original_title ? item.original_title : item.original_name}</Card.Title>

                              <Card.Text className='match'>95% Match  <span>{item.adult ? `U/A 18+` : "U/A 13+"}</span></Card.Text>

                            </Card.Body>

                          </Card>

                        </div>

                      ))

                      :
                      <h1 className='text-white'>Ops Something Went Wrong...</h1>

                  }

                </Slider>

                {/* NEXT BUTTON */}
                <button className='next-btn' onClick={next6} >

                  <i class="fa-solid fa-angle-right fa-lg"></i>

                </button>

              </div>

            </div>
        }





        {/* Animated Tv shows*/}

        {

          loading ?

            <div className='mt-4'>

              <SkeletonTheme baseColor="#202020" highlightColor="#f10000" >

                <p style={{ marginBottom: '0px' }}>

                  <Skeleton duration={1.4} width={'95%'} borderRadius={'1rem'} />

                  <Skeleton duration={1.4} width={'85%'} borderRadius={'1rem'} />

                  <Skeleton duration={1.4} width={'80%'} borderRadius={'1rem'} />

                  <Skeleton duration={1.4} width={'75%'} borderRadius={'1rem'} />

                </p>

              </SkeletonTheme>



            </div>

            :

            <div className='slide-h3'>

              <h3>Animated Tv Shows</h3>


              <div className='d-flex justify-content-center' style={{ position: "relative" }}>


                <Slider {...settings} ref={sliderRef7}>

                  {

                    animetv ?

                      animetv.map(item => (

                        <div className='slider-item'>

                          <Card className="bg-dark text-white card-hoverable card-animation">

                            <Card.Img src={`${posterUrl}${item.backdrop_path}`} alt="Card image" />

                            <Card.ImgOverlay>

                              <Card.Title>{item.original_title ? item.original_title : item.original_name}</Card.Title>

                            </Card.ImgOverlay>

                          </Card>


                          {/* HOVERD CARD */}


                          <Card className='hover-card' >

                            <Card.Img variant="top" src={`${posterUrl}${item.backdrop_path}`} />

                            <Card.Body>

                              <Button className='hover-btn' onClick={() => { getvideoid(item.id, movie, item) }}><i class="fa-solid fa-play"></i></Button>


                              <Button className='hover-btn-plus'><i class="fa-solid fa-plus"></i></Button>

                              <Button className='hover-btn-plus'><i class="fa-regular fa-thumbs-up"></i></Button>

                              {/* <Button className='hover-btn-plus'  style={{ marginLeft: '4.1rem' }}><i class="fa-solid fa-angle-down"></i></Button> */}

                              <Card.Title className='mt-2'>{item.original_title ? item.original_title : item.original_name}</Card.Title>

                              <Card.Text className='match'>95% Match  <span>{item.adult ? `U/A 18+` : "U/A 13+"}</span></Card.Text>

                            </Card.Body>

                          </Card>

                        </div>

                      ))

                      :
                      <h1 className='text-white'>Ops Something Went Wrong...</h1>

                  }

                </Slider>

                {/* NEXT BUTTON */}
                <button className='next-btn' onClick={next7} >

                  <i class="fa-solid fa-angle-right fa-lg"></i>

                </button>

              </div>

            </div>
        }






        {/* Top Movies*/}

        {

          loading ?

            <div className='mt-4'>

              <SkeletonTheme baseColor="#202020" highlightColor="#f10000" >

                <p style={{ marginBottom: '0px' }}>

                  <Skeleton duration={1.4} width={'95%'} borderRadius={'1rem'} />

                  <Skeleton duration={1.4} width={'85%'} borderRadius={'1rem'} />

                  <Skeleton duration={1.4} width={'80%'} borderRadius={'1rem'} />

                  <Skeleton duration={1.4} width={'75%'} borderRadius={'1rem'} />

                </p>

              </SkeletonTheme>



            </div>

            :

            <div className='slide-h3'>

              <h3>Top Rated Movies</h3>


              <div className='d-flex justify-content-center' style={{ position: "relative" }}>


                <Slider {...settings} ref={sliderRef8}>

                  {

                    topmovies ?

                      topmovies.map(item => (

                        <div className='slider-item'>

                          <Card className="bg-dark text-white card-hoverable card-animation">

                            <Card.Img src={`${posterUrl}${item.backdrop_path}`} alt="Card image" />

                            <Card.ImgOverlay>

                              <Card.Title>{item.original_title ? item.original_title : item.original_name}</Card.Title>

                            </Card.ImgOverlay>

                          </Card>


                          {/* HOVERD CARD */}


                          <Card className='hover-card' >

                            <Card.Img variant="top" src={`${posterUrl}${item.backdrop_path}`} />

                            <Card.Body>

                              <Button className='hover-btn' onClick={() => { getvideoid(item.id, movie, item) }}><i class="fa-solid fa-play"></i></Button>


                              <Button className='hover-btn-plus'><i class="fa-solid fa-plus"></i></Button>

                              <Button className='hover-btn-plus'><i class="fa-regular fa-thumbs-up"></i></Button>

                              {/* <Button className='hover-btn-plus'  style={{ marginLeft: '4.1rem' }}><i class="fa-solid fa-angle-down"></i></Button> */}

                              <Card.Title className='mt-2'>{item.original_title ? item.original_title : item.original_name}</Card.Title>

                              <Card.Text className='match'>95% Match  <span>{item.adult ? `U/A 18+` : "U/A 13+"}</span></Card.Text>

                            </Card.Body>

                          </Card>

                        </div>

                      ))

                      :
                      <h1 className='text-white'>Ops Something Went Wrong...</h1>

                  }

                </Slider>

                {/* NEXT BUTTON */}
                <button className='next-btn' onClick={next8} >

                  <i class="fa-solid fa-angle-right fa-lg"></i>

                </button>

              </div>

            </div>
        }







        {/*Trending Movies*/}

        {

          loading ?

            <div className='mt-4'>

              <SkeletonTheme baseColor="#202020" highlightColor="#f10000" >

                <p style={{ marginBottom: '0px' }}>

                  <Skeleton duration={1.4} width={'95%'} borderRadius={'1rem'} />

                  <Skeleton duration={1.4} width={'85%'} borderRadius={'1rem'} />

                  <Skeleton duration={1.4} width={'80%'} borderRadius={'1rem'} />

                  <Skeleton duration={1.4} width={'75%'} borderRadius={'1rem'} />

                </p>

              </SkeletonTheme>



            </div>

            :

            <div className='slide-h3'>

              <h3>Trending Movies Now</h3>


              <div className='d-flex justify-content-center' style={{ position: "relative" }}>


                <Slider {...settings} ref={sliderRef9}>

                  {

                    trendmovie ?

                      trendmovie.map(item => (

                        <div className='slider-item'>

                          <Card className="bg-dark text-white card-hoverable card-animation">

                            <Card.Img src={`${posterUrl}${item.backdrop_path}`} alt="Card image" />

                            <Card.ImgOverlay>

                              <Card.Title>{item.original_title ? item.original_title : item.original_name}</Card.Title>

                            </Card.ImgOverlay>

                          </Card>


                          {/* HOVERD CARD */}


                          <Card className='hover-card' >

                            <Card.Img variant="top" src={`${posterUrl}${item.backdrop_path}`} />

                            <Card.Body>

                              <Button className='hover-btn' onClick={() => { getvideoid(item.id, movie, item) }}><i class="fa-solid fa-play"></i></Button>


                              <Button className='hover-btn-plus'><i class="fa-solid fa-plus"></i></Button>

                              <Button className='hover-btn-plus'><i class="fa-regular fa-thumbs-up"></i></Button>

                              {/* <Button className='hover-btn-plus'  style={{ marginLeft: '4.1rem' }}><i class="fa-solid fa-angle-down"></i></Button> */}

                              <Card.Title className='mt-2'>{item.original_title ? item.original_title : item.original_name}</Card.Title>

                              <Card.Text className='match'>95% Match  <span>{item.adult ? `U/A 18+` : "U/A 13+"}</span></Card.Text>

                            </Card.Body>

                          </Card>

                        </div>

                      ))

                      :
                      <h1 className='text-white'>Ops Something Went Wrong...</h1>

                  }

                </Slider>

                {/* NEXT BUTTON */}
                <button className='next-btn' onClick={next9} >

                  <i class="fa-solid fa-angle-right fa-lg"></i>

                </button>

              </div>

            </div>
        }







        {/*Tv arriving today*/}

        {

          loading ?

            <div className='mt-4'>

              <SkeletonTheme baseColor="#202020" highlightColor="#f10000" >

                <p style={{ marginBottom: '0px' }}>

                  <Skeleton duration={1.4} width={'95%'} borderRadius={'1rem'} />

                  <Skeleton duration={1.4} width={'85%'} borderRadius={'1rem'} />

                  <Skeleton duration={1.4} width={'80%'} borderRadius={'1rem'} />

                  <Skeleton duration={1.4} width={'75%'} borderRadius={'1rem'} />

                </p>

              </SkeletonTheme>



            </div>

            :

            <div className='slide-h3'>

              <h3> Tv Shows Arriving Today</h3>


              <div className='d-flex justify-content-center' style={{ position: "relative" }}>


                <Slider {...settings} ref={sliderRef10}>

                  {

                    arrivingseries ?

                      arrivingseries.map(item => (

                        <div className='slider-item'>

                          <Card className="bg-dark text-white card-hoverable card-animation">

                            <Card.Img src={`${posterUrl}${item.backdrop_path}`} alt="Card image" />

                            <Card.ImgOverlay>

                              <Card.Title>{item.original_title ? item.original_title : item.original_name}</Card.Title>

                            </Card.ImgOverlay>

                          </Card>


                          {/* HOVERD CARD */}


                          <Card className='hover-card' >

                            <Card.Img variant="top" src={`${posterUrl}${item.backdrop_path}`} />

                            <Card.Body>

                              <Button className='hover-btn' onClick={() => { getvideoid(item.id, series, item) }}><i class="fa-solid fa-play"></i></Button>


                              <Button className='hover-btn-plus'><i class="fa-solid fa-plus"></i></Button>

                              <Button className='hover-btn-plus'><i class="fa-regular fa-thumbs-up"></i></Button>

                              {/* <Button className='hover-btn-plus'  style={{ marginLeft: '4.1rem' }}><i class="fa-solid fa-angle-down"></i></Button> */}

                              <Card.Title className='mt-2'>{item.original_title ? item.original_title : item.original_name}</Card.Title>

                              <Card.Text className='match'>95% Match  <span>{item.adult ? `U/A 18+` : "U/A 13+"}</span></Card.Text>

                            </Card.Body>

                          </Card>

                        </div>

                      ))

                      :
                      <h1 className='text-white'>Ops Something Went Wrong...</h1>

                  }

                </Slider>

                {/* NEXT BUTTON */}
                <button className='next-btn' onClick={next10} >

                  <i class="fa-solid fa-angle-right fa-lg"></i>

                </button>

              </div>

            </div>
        }


        <Toaster richColors position="bottom-center"/>


      </section>

    </>

  )

}

export default HomeVideos