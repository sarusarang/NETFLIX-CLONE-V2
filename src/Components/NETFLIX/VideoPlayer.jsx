import React, { useEffect, useRef } from 'react';
import YouTube from 'react-youtube';
import './NetflixHome.css'
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom'


function FullScreenVideo() {


    // TO GET THE ID OF THE VIDEO
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get('id');
 
    console.log(id);


    //VIDEOPLAYER  

    const playerRef = useRef(null);

    const opts = {
        height: '100%',
        width: '100%',
        playerVars: {
            modestbranding: 1,
            rel: 0,
            autoplay: 1,

        },
    };

    const onPlay = event => {
        event.target.getIframe().requestFullscreen(); // Request full screen when the video starts playing
    };


    return (


        <div style={{ width: '100vw', height: '100vh' }} className='main-video'>


            <YouTube className='videoplayer'

                videoId={id}
                opts={opts}
                onPlay={onPlay}
                containerClassName={'youtube-player-container'}
                ref={playerRef}

            />


        </div>



    );
}

export default FullScreenVideo;
