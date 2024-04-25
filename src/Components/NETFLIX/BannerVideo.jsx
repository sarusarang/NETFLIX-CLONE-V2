import React, { useState, useRef } from 'react'
import './Bannervideo.css'

function BannerVideo() {


    // TO HANDLE WHEN THE BANNER VIDEO IS ENDED
    const [videoend, setvideoend] = useState(false)
    const [videonone, setvideonone] = useState(true)

    // Handle Video is mute and un mute
    const videoRef = useRef(null);
    const [isMuted, setIsMuted] = useState(true);

    // TO HANDLE MULTIPLE SECTION SUCH AS MOVIE HOME..ECT WHEN A USERCLICKS
    const [Home, setHome] = useState(false)
    const [Tvshows, SetTVshows] = useState(false)
    const [Movies, SetMovies] = useState(true)

    // Resource for multiple section


    // Handle muted and unmuted
    const toggleMute = () => {
        const video = videoRef.current;
        if (video) {
            video.muted = !video.muted;
            setIsMuted(video.muted);
        }
    }

    // handle video ended or not
    const handlevideoended = () => {

        setvideoend(true)
        setvideonone(false)
    }


    return (

        <>

            <div className='video-section w-100'>

                <div className='banner'>

                    {

                        videonone &&

                        <div style={{ position: "relative" }}>


                            <video ref={videoRef} onEnded={handlevideoended} playsInline autoPlay muted width={'100%'}>

                                {
                                    Home &&

                                    <source src='/HOME-VIDEO.mp4' />

                                }

                                {
                                    Tvshows &&

                                    <source src='/TV-SHOW-VIDEO.mp4' />

                                }

                                {
                                    Movies &&

                                    <source src='/MOVIE-VIDEO.mp4' />

                                }



                            </video>


                            <div className='muted d-flex align-items-center'>

                                <button onClick={toggleMute}>

                                    {isMuted ? <i class="fa-solid fa-volume-xmark"></i> : <i class="fa-solid fa-volume-high"></i>}

                                </button>

                                <div className='rating ms-1'>

                                    <p>U/A 13+</p>

                                </div>

                            </div>

                        </div>

                    }



                    {

                        videoend &&

                        <div className='w-100'>

                            {

                                Home &&

                                <img width={'100%'} height={'95%'} src="https://wallpapers.com/images/hd/hawkins-stranger-things-dxaviuaj5tmp5snh.jpg" className='img-fluid' alt="banner-img" />


                            }

                            {

                                Tvshows &&

                                <img width={'100%'} height={'95%'} src="https://occ-0-7777-3663.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABQnCKOBbn0D156dJyzFieTcRtxJ-dA63uK6Bi1nBcZRwDPuUY2fjaUDh3KsR0X-7BKGJoqgxy-aq1BMODDW1m9poDaNZM34dZ9Ks.webp?r=2ac" className='img-fluid' alt="banner-img" />


                            }

                            {

                                Movies &&

                                <img width={'100%'} height={'95%'} src="https://images7.alphacoders.com/124/1241136.png" className='img-fluid' alt="banner-img" />


                            }




                        </div>

                    }

                </div>


                <div className='banner-text'>

                    <div className='banner-text-img'>

                        {

                            Home &&

                            <img src="https://occ-0-7777-3663.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABSNUzoP8HHEMoUSYEp5GdQ92BwmUzjENlcVRytYB-9zH3CWjN1d3IEkLGjB8njlIALYjHH8NG9eT0k876YHi9_JtUIJCaG9ZXHcEC26sYbfa-GlUN6Xyuvg5dqpkUDPvoUvTLYssGgkv0YErnLL1LEzancT6V39BpxajPFO7uP1Q_SpE-D4E.webp?r=23b" className='img-fluid' alt="" />


                        }

                        {

                            Tvshows &&

                            <img src="https://occ-0-7777-3663.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABbVBZZI4ewNxMH5D6oTe7AiwHg0WjmMUwC7nJ0w2SFZO2YWN7BXiEu6BV80gef6qcE0rT65M2UP7TGdKroEWmGZg7W1wxug75fMpQrCx68G2rIyXtoYE_F6ea_OrDddy_KtGDvt0Lx7dekH-AQRoAtH8vCKeXyMYSIfSH7iBXdPn1D8cSj1o.webp?r=768" className='img-fluid' alt="" />


                        }

                        {

                            Movies &&

                            <img src="https://occ-0-7777-3663.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABct_rZRPERMGwNoJNpgVKu7vYi3ejjm_Q59OgMl4q_3syd98TzfbQBgdA5ixdbiIXuvFmEooPlUQn6riIBFZS3qI7zsvKzT9gvvUAha8wuw.webp?r=2ad" className='img-fluid' alt="" />


                        }




                    </div>

                    <button > <i class="fa-solid fa-play fa-lg"></i>  Play</button>

                </div>



            </div>



        </>

    )
}

export default BannerVideo