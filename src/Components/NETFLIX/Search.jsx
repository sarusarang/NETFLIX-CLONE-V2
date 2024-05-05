import React, { useEffect, useState } from 'react'
import './Search.css'
import { Container, Col, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { getmovievideos, getseriesvideos } from '../../SERVICES/Movie';
import { useNavigate } from 'react-router-dom';
import { toast, Toaster } from 'sonner';
import Spinner from 'react-bootstrap/Spinner';


function Search({ searchdata, seacrhloading, inputdata }) {

    // BASE URL OF POSTER IMAGE
    const posterUrl = `https://image.tmdb.org/t/p/w300`;

    const navigate = useNavigate()


    const movie = "movie"
    const series = "series"

    const getvideo = async (id, status) => {

        let moviekey, serieskey

        if (status == "movie") {

            const mov = await getmovievideos(id)
            moviekey = mov.data.results;

            if (moviekey.length == 0) {

                toast.error("No Videos Found")
            }

        }
        else {

            const ser = await getseriesvideos(id)
            serieskey = ser.data.results;
            console.log(serieskey);

            if (serieskey.length == 0) {

                toast.error("No Videos Found")
            }

        }

        if (moviekey) {

            const vid = moviekey[0]
            navigate(`/player?id=${vid.key}`);


        }
        else if (serieskey) {

            const vid = serieskey[0]
            navigate(`/player?id=${vid.key}`);

        }
    }


    return (

        <>

            <section className='search-main'>

                <Container>

                    <Row>

                        {
                            seacrhloading &&

                            <div className='w-100 d-flex justify-content-center'>

                                <Spinner animation="border" variant="danger" />

                            </div>

                        }

                        {

                            inputdata ?

                                searchdata.map(item => (


                                    <Col md={2} sm={3} xs={6} className='mt-4'>

                                        <Card className='card-width'>

                                            <Card.Img onClick={() => { getvideo(item.id, item.original_title ? movie : series) }} variant="top" src={`${posterUrl}${item.poster_path ? item.poster_path : item.profile_path}`} />

                                        </Card>

                                    </Col>

                                ))
                                :

                                <div style={{ width: '100%', height: '25rem' }} className='d-flex align-items-center justify-content-center '>

                                    <h1 className='text-center search-your'>Search Your Favourite Tv Shows & Movies  <i class="fa-solid fa-magnifying-glass"></i> </h1>


                                </div>

                        }

                        {
                            searchdata.length == 0 && inputdata &&

                            <h1 className='text-center'>No Movies or Series Found</h1>
                        }


                    </Row>

                </Container>

                <Toaster richColors position='top-center' />

                

            </section>



        </>

    )
}

export default Search