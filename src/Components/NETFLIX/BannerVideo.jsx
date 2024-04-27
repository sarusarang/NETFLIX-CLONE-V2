import React, { useState, useRef } from 'react'
import './Bannervideo.css'
import { useSelector } from 'react-redux'

function BannerVideo() {


    // TO HANDLE WHEN THE BANNER VIDEO IS ENDED
    const [videoend, setvideoend] = useState(false)
    const [videonone, setvideonone] = useState(true)


    // Handle Video is mute and un mute
    const videoRef = useRef(null);
    const [isMuted, setIsMuted] = useState(true);


    // TO HANDLE MULTIPLE SECTION SUCH AS MOVIE HOME..ECT WHEN A USERCLICKS
    const { HOME, TVSHOWS, MOVIES, CHILDREN } = useSelector((state) => state.netflix)


    // Handle muted and unmuted
    const handleMuteToggle = () => {
        if (videoRef.current) {
            videoRef.current.muted = !videoRef.current.muted;
            setIsMuted(videoRef.current.muted);
        }
    };


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


                            {

                                TVSHOWS &&


                                <video ref={videoRef} onEnded={handlevideoended} playsInline autoPlay muted width={'100%'} src='https://dl.dropboxusercontent.com/scl/fi/txyxz5khqtxig9sxyhmuc/MONEY-HEIST.mp4?rlkey=m3y80hodd95rtfe8lt9ge846p&st=z0x6aeh0&dl=0' type='video/mp4'></video>


                            }



                            {

                                HOME &&

                                <video ref={videoRef} onEnded={handlevideoended} playsInline autoPlay muted width={'100%'} src='https://dl.dropboxusercontent.com/scl/fi/2f8pdc8eqbh8n3bv87qjw/ST-VIDEO.mp4?rlkey=u35xa39g9z4nlq432rfhquifo&st=noxscx6a&dl=0' type='video/mp4'></video>


                            }


                            {

                                MOVIES &&


                                <video ref={videoRef} onEnded={handlevideoended} playsInline autoPlay muted width={'100%'} src='https://dl.dropboxusercontent.com/scl/fi/y99dp61nzo0c9ago66gf5/MOVIE-VIDEO.mp4?rlkey=t9apd4u1dhfflfrwz53r8ljh1&st=i2a8ie48&dl=0' type='video/mp4'></video>


                            }


                            {

                                CHILDREN &&


                                <video ref={videoRef} onEnded={handlevideoended} playsInline autoPlay muted width={'100%'} src='https://dl.dropboxusercontent.com/scl/fi/ct1dk10scuk9hfrs2caam/CHLIDREN-VIDEO.mp4?rlkey=hu5ni6871scxmsd83cpkenjc1&st=fr95u0om&dl=0' type='video/mp4'></video>


                            }


                            <div className='muted d-flex align-items-center'>

                                <button onClick={handleMuteToggle} >

                                
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

                                TVSHOWS &&

                                <img width={'100%'} height={'95%'} src="https://wallpapers.com/images/featured/money-heist-segtwbhffwy01w82.jpg" className='img-fluid' alt="banner-img" />


                            }

                            {

                                HOME &&

                                <img width={'100%'} height={'95%'} src="https://images6.alphacoders.com/111/1114212.jpg" className='img-fluid' alt="banner-img" />


                            }


                            {

                                MOVIES &&

                                <img width={'100%'} height={'95%'} src="https://images.hdqwalls.com/wallpapers/2022-top-gun-maverick-zz.jpg" className='img-fluid' alt="banner-img" />


                            }


                            {

                                CHILDREN &&

                                <img width={'100%'} height={'95%'} src="https://media.mikrosanimation.com/app/uploads/2023/01/02110235/KungFuPanda-still.jpg" className='img-fluid' alt="banner-img" />


                            }




                        </div>

                    }

                </div>


                <div className='banner-text'>

                    <div className='banner-text-img'>


                        {

                            TVSHOWS &&

                            <img src="https://occ-0-7777-3663.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABbVBZZI4ewNxMH5D6oTe7AiwHg0WjmMUwC7nJ0w2SFZO2YWN7BXiEu6BV80gef6qcE0rT65M2UP7TGdKroEWmGZg7W1wxug75fMpQrCx68G2rIyXtoYE_F6ea_OrDddy_KtGDvt0Lx7dekH-AQRoAtH8vCKeXyMYSIfSH7iBXdPn1D8cSj1o.webp?r=768" className='img-fluid' alt="" />


                        }


                        {

                            HOME &&

                            <img src="https://occ-0-7777-3663.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABSNUzoP8HHEMoUSYEp5GdQ92BwmUzjENlcVRytYB-9zH3CWjN1d3IEkLGjB8njlIALYjHH8NG9eT0k876YHi9_JtUIJCaG9ZXHcEC26sYbfa-GlUN6Xyuvg5dqpkUDPvoUvTLYssGgkv0YErnLL1LEzancT6V39BpxajPFO7uP1Q_SpE-D4E.webp?r=23b" className='img-fluid' alt="" />


                        }

                        {

                            MOVIES &&

                            <img src="https://occ-0-7777-3663.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABct_rZRPERMGwNoJNpgVKu7vYi3ejjm_Q59OgMl4q_3syd98TzfbQBgdA5ixdbiIXuvFmEooPlUQn6riIBFZS3qI7zsvKzT9gvvUAha8wuw.webp?r=2ad" className='img-fluid' alt="" />


                        }

                        {

                            CHILDREN &&

                            <img src="https://occ-0-7777-3663.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABe4VHKlIF5u1HPyYsHgMB0t44Zx8B6XxaRzKnZAO2fKZ-bcwZ03nALhdtb-Plo1nHhtNCNi6ewe5vMpIkZ01JG8Nq0Hg1tixNRzk3bXlP1yiPRuoAcn8cjzM2c1IZUg32cZnFbDz-uXjY8jJJy0oASBTBXR881DsGLwOxjyMBzjwYewsRorF.webp?r=789" className='img-fluid' alt="" />


                        }



                    </div>

                    <button > <i class="fa-solid fa-play fa-lg"></i>  Play</button>

                </div>



            </div>



        </>

    )
}

export default BannerVideo